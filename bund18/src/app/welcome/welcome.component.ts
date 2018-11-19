import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteControlService } from '../_services/remote-control.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { 

  deviceStat: boolean;

  constructor(
    private router: Router,
    private rcService: RemoteControlService,
  ) { }

  ngOnInit() {
    this.CheckDevice();
    
  }

  onClickEntry() {
    console.log("on click the entry button");
    this.router.navigate(['/bund18/shake']);
  }

  CheckDevice() {
    this.rcService.checkDeviceOnline();
    if((this.rcService.deviceNo==40045)||(this.rcService.deviceNo==40055)){
      this.deviceStat = false;
    }
    else
    {
      this.deviceStat = true;
      console.log("device is offline")
    }
  }
}
