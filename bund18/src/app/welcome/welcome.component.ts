import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from '../_services/record.service';
// import { RemoteControlService } from '../_services/remote-control.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { 

  deviceStat: boolean;

  constructor(
    private router: Router,
    //private rcService: RemoteControlService,
  ) { }

  ngOnInit() {
    this.CheckDevice();
    
  }

  onClickEntry() {
    console.log("on click the entry button");
    this.router.navigate(['/bund18/shake']);
  }

  CheckDevice() {
    
  }
}
