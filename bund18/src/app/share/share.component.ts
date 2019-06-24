import { Component, OnInit, Inject } from '@angular/core';
import { RecordService } from '../_services/record.service';
import { Router } from '@angular/router';
import * as wx from 'weixin-js-sdk';
import { environment } from '../../environments/environment';
import { ShareLogPost } from '../_models/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  languageFlag = 'ch';
  tmpLog = 'log';
  tmpLog1 = 'log';
  tmpLog2 = 'log';

  constructor(
    private recordService: RecordService,
    private router: Router
  ) { }

  ngOnInit() {
    this.languageFlag = localStorage.getItem('languageFlag');
    const selectId = parseInt(localStorage.getItem('selectId'));
    const licenseId = parseInt(localStorage.getItem('licenseId'));

    // Close the device
    this.recordService.closeDevice(selectId).subscribe();

    let isIOS = localStorage.getItem('isIOS');
    if(isIOS === 'false') {
      this.recordService.getWxParameters('share').subscribe((resp) => {
        localStorage.setItem('appId', resp.appId.toString());
        localStorage.setItem('nonceStr', resp.nonceStr.toString());
        localStorage.setItem('timestamp', resp.timestamp.toString());
        localStorage.setItem('signature', resp.signature.toString());

        this.tmpLog = `${localStorage.getItem('appId')}, ${localStorage.getItem('timestamp')}`;
        this.tmpLog1 = `${localStorage.getItem('nonceStr')}, ${localStorage.getItem('signature')}`;

        this.SetupWechatShare();
      });
    } else {
      this.SetupWechatShare();
    }

    this.recordService.releaseLicense(licenseId).subscribe(resp => {}, error => {console.log(error)});
    // setTimeout(() => { //for test
    //   this.router.navigate(['end']);
    // }, 5000);
  }

  SendShareInfoToServer(op: string) {
    this.tmpLog = 'SendShareInfoToServer';
    const sharepost: ShareLogPost = {
      badgeID: parseInt(localStorage.getItem('badgeID')),
      selectID: parseInt(localStorage.getItem('selectId')),
      operation: op,
    };

    this.recordService.saveShareInfo(sharepost).subscribe(() => {
      console.log('add one share info to database');
    }, error => {
      console.log(error);
    });
    this.router.navigate(['end']);
  }

  SetupWechatShare() {
    const imageUrl = environment.domainUrl + 'assets/H5/small_logo.jpg';
    const shareLink = environment.domainUrl + 'shareCard/' + localStorage.getItem('selectId');
    // load from pre-load parameters, also from 3th party service
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
        title: '蝶.梦 梦径系列 锦江乐园主题灯光秀',
        link: shareLink,
        imgUrl: imageUrl,
        success: () => {this.SendShareInfoToServer( 'moments' ); },
        cancel: () => {},
      }),
      wx.onMenuShareAppMessage({
        title: '蝶.梦 梦径系列',
        desc: '锦江乐园主题灯光秀',
        link: shareLink,
        imgUrl: imageUrl,
        type: 'link',
        success: () => {this.SendShareInfoToServer('friends'); },
        cancel: () => {},
      });
    });

    wx.error((res) => {
      this.tmpLog2 = res.errMsg.toString();
    });
  }

}
