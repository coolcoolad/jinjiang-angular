import { Component, OnInit, Inject } from '@angular/core';
import { RecordService } from '../_services/record.service';
import * as wx from 'weixin-js-sdk';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(
    private recordService: RecordService,
    private router: Router
  ) { }

  ngOnInit() {
    this.SetupWechatShare();
    setTimeout(() => {
      this.router.navigate(['bund18/end']);//for test
    }, 2000);
  }

  SendShareInfoToServer(op:string) {
    this.router.navigate(['bund18/end']);
  }

  SetupWechatShare() {
    this.recordService.getWxParameters("welcome").subscribe((resp)=>{
      localStorage.setItem('appId', resp.appId.toString());
      localStorage.setItem('nonceStr', resp.nonceStr.toString());
      localStorage.setItem('timestamp', resp.timestamp.toString());
      localStorage.setItem('signature', resp.signature.toString());

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
          link: '',
          imgUrl: imageUrl,
          success: () => {this.SendShareInfoToServer( "moments" ); },
          cancel: () => {},
        }),
        wx.onMenuShareAppMessage({
          title: '摇一摇，摇出你的2019新年运势',
          desc: 'BUND18的二重奏:外滩十八号圣诞新年艺术装置',
          link: '',
          imgUrl: imageUrl,
          type: 'link',
          success: () => {this.SendShareInfoToServer("friends");},
          cancel: () => {},
        })
      });
    });
  }

}
