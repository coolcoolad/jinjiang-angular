import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';
import { BadgeRequest, Badge, WxPara } from '../_models';
// import { RemoteControlService } from '../_services/remote-control.service';
import { Ng2DeviceService } from 'ng2-device-detector';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as wx from 'weixin-js-sdk';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { 
  private deviceInfo;
  private valid: boolean;

  constructor(
    private router: Router,
    private recordService: RecordService,
    private deviceService: Ng2DeviceService,
  ) { }

  ngOnInit() {
    //clear badge when loading
    localStorage.clear();
    this.valid = false;

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

    //pre load wechat auth if using ios
    if(`${this.deviceInfo.device}` == "iphone")
    {
      localStorage.setItem('isIOS', 'true');

      //ios need to register at root
      this.recordService.getWxParameters("welcome").pipe(first()).subscribe((resp)=>{
        localStorage.setItem('appId', resp.appId.toString());
        localStorage.setItem('nonceStr', resp.nonceStr.toString());
        localStorage.setItem('timestamp', resp.timestamp.toString());
        localStorage.setItem('signature', resp.signature.toString());
        this.valid = true;
  
        this.SetupWechatShare();
      });
    }
    else
    {
      localStorage.setItem('isIOS', 'false');
      this.valid = true;
    } 
  }

  onClickEntry() {
    if(this.valid) {
      console.log("on click the entry button");
      this.router.navigate(['/bund18/shake']);
    }
  } 

  SetupWechatShare() {
    var imageUrl = environment.domainUrl + '/assets/vignette_small.jpg';

    //load from pre-load parameters, also from 3th party service   
    wx.config({
      debug: false,
      appId: localStorage.getItem('appId'),
      timestamp: localStorage.getItem('timestamp'),
      nonceStr: localStorage.getItem('nonceStr'),
      signature: localStorage.getItem('signature'),
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });    

    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: '摇一摇，摇出你的2019新年运势',
        link: 'http://mm.wuzhanggui.shop/bund18/welcome',
        imgUrl: imageUrl,
        success: () => {},
        cancel: () => {},
      }),
      wx.onMenuShareAppMessage({
        title: '摇一摇，摇出你的2019新年运势',
        desc: 'BUND18的二重奏:外滩十八号圣诞新年艺术装置',
        link: 'http://mm.wuzhanggui.shop/bund18/welcome',
        imgUrl: imageUrl,
        type: 'link',
        success: ()=>{},
        cancel: ()=>{},
      })
    });
  }
}
