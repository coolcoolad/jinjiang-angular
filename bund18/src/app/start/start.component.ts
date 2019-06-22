import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';

import { License } from '../_models';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  waiting = false;

  constructor(
    private recordService: RecordService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickEntry(languageFlag: string) {
    if (this.waiting) {
      return;
    }
    localStorage.setItem('languageFlag', languageFlag);
    this.waiting = true;
    this.recordService.requestLicense().subscribe(license => {
      localStorage.setItem('licenseId', license.id.toString());
      this.waiting = false;
      this.router.navigate(['hint']);
    }, error => {
      console.log(error);
      setTimeout(() => {
        this.onClickEntry(languageFlag);
      }, 2000);
    });
  }
}
