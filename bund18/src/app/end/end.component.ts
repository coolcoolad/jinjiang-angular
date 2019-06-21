import { Component, OnInit } from '@angular/core';
import { RecordService } from '../_services/record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  private languageFlag = 'ch';

  constructor(
    private recordService: RecordService,
    private router: Router
  ) { }

  ngOnInit() {
    this.languageFlag = localStorage.getItem('languageFlag');
  }

}
