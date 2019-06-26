import { Component, OnInit } from '@angular/core';
import { RecordService } from '../_services/record.service';
import { Router } from '@angular/router';
import * as wx from 'weixin-js-sdk';
import { environment } from '../../environments/environment';
import { ShareLogPost } from '../_models/share';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  public languageFlag = 'ch';

  constructor(
    private recordService: RecordService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.languageFlag = localStorage.getItem('languageFlag');
    
    let isIOS = localStorage.getItem('isIOS');
    if(isIOS === 'false') {
      this.recordService.getWxParameters('end').subscribe((resp) => {
        localStorage.setItem('appId', resp.appId.toString());
        localStorage.setItem('nonceStr', resp.nonceStr.toString());
        localStorage.setItem('timestamp', resp.timestamp.toString());
        localStorage.setItem('signature', resp.signature.toString());

        // this.tmpLog = `${localStorage.getItem('appId')}, ${localStorage.getItem('timestamp')}`;
        // this.tmpLog1 = `${localStorage.getItem('nonceStr')}, ${localStorage.getItem('signature')}`;

        this.SetupWechatShare();
      });
    } else {
      this.SetupWechatShare();
    }

  }

  SendShareInfoToServer(op: string) {
    //this.tmpLog = 'SendShareInfoToServer';
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
    //this.router.navigate(['end']);
  }

  SetupWechatShare() {
    const imageUrl = environment.domainUrl + 'assets/H5/thumbnail.png';
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
      //this.tmpLog2 = res.errMsg.toString();
    });
  }

}
