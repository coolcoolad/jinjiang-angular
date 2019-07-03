import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as wx from 'weixin-js-sdk';
import { environment } from '../../environments/environment';
import { ShareLogPost } from '../_models/share';
import { RecordService } from '../_services/record.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit, OnDestroy {
  imgSrc = '';
  pathPrefix = '../../assets/gif/';
  timer = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recordService: RecordService,
  ) {
    //this.imgSrc = this.pathPrefix + this.activatedRoute.snapshot.params['imgSrc'];
  }

  ngOnInit() {
    var selectId = 1;
    selectId = parseInt(localStorage.getItem('selectId'));
    this.imgSrc = this.pathPrefix + selectId + '.gif';

    const isIOS = localStorage.getItem('isIOS');
    if(isIOS === 'false') {
      this.recordService.getWxParameters('display').subscribe((resp) => {
        localStorage.setItem('appId', resp.appId.toString());
        localStorage.setItem('nonceStr', resp.nonceStr.toString());
        localStorage.setItem('timestamp', resp.timestamp.toString());
        localStorage.setItem('signature', resp.signature.toString());

        this.SetupWechatShare();
      });
    } else {
      this.SetupWechatShare();
    }
    this.recordService.choiceReport(selectId).subscribe(resp => {}, error => {console.log(error)});
    setTimeout(() => {
      // Close the device
      this.recordService.closeDevice(selectId).subscribe();
    }, 1000);
    this.timer = window.setTimeout(() => {
      this.router.navigate(['share']);
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.timer != null) {
      window.clearTimeout(this.timer);
    }
  }

  SendShareInfoToServer(op:string) {
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
    const shareLink = environment.domainUrl + 'card' + localStorage.getItem('languageFlag') + localStorage.getItem('selectId') + '.html';
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
      })
    });
  }

}
