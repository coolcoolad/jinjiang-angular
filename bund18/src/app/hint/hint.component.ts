import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';
import { BadgeRequest } from '../_models';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit { 
  private deviceInfo;
  private valid: boolean;

  constructor(
    private recordService: RecordService,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(()=> {
      let badge = new BadgeRequest();
      this.recordService.requestBadge(badge);
      this.router.navigate(['bund18/select']);
    }, 2000);
  }
}
