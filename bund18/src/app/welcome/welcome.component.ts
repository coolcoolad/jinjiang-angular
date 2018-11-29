import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';
import { BadgeRequest, Badge, WxPara } from '../_models';
// import { RemoteControlService } from '../_services/remote-control.service';
import { Ng2DeviceService } from 'ng2-device-detector';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { 
  private deviceInfo;

  constructor(
    private router: Router,
    private recordService: RecordService,
    private deviceService: Ng2DeviceService,
  ) { }

  ngOnInit() {
    //clear badge when loading
    localStorage.clear();

    this.deviceInfo = this.deviceService.getDeviceInfo();
    //console.log(this.deviceInfo);    
    var badge: BadgeRequest = {
      browser: `${this.deviceInfo.browser}`,
      version: `${this.deviceInfo.browser_version}`,
      device: `${this.deviceInfo.device}`,
      os: `${this.deviceInfo.os}`,
    }
    //console.log(badge);
    this.recordService.requestBadge(badge).pipe(first()).subscribe((resp)=>{
      localStorage.setItem('badgeID', resp.id.toString());
    });

    //pre load wechat auth
    this.recordService.getWxParameters().pipe(first()).subscribe((resp)=>{
      localStorage.setItem('appId', resp.appId.toString());
      localStorage.setItem('nonceStr', resp.nonceStr.toString());
      localStorage.setItem('timestamp', resp.timestamp.toString());
      localStorage.setItem('signature', resp.signature.toString());
    });
  }

  onClickEntry() {
    console.log("on click the entry button");
    this.router.navigate(['/bund18/shake']);
  } 
}
