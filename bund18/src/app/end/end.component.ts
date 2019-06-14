import { Component, OnInit } from '@angular/core';
import { RecordService } from '../_services/record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(
    private recordService: RecordService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
