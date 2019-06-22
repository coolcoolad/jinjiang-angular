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
  public languageFlag = 'ch';

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

    this.SetupWechatShare();
    this.recordService.releaseLicense(licenseId).subscribe(resp => {}, error => {console.log(error)});
    setTimeout(() => {
      this.router.navigate(['end']);
    }, 3000);
  }

  SendShareInfoToServer(op: string) {
    const sharepost: ShareLogPost = {
      badgeID: parseInt(localStorage.getItem('badgeID')),
      selectID: parseInt(localStorage.getItem('selectId')),
      operation: op,
    };

    this.recordService.saveShareInfo(sharepost).subscribe(()=>{
      console.log('add one share info to database');
    }, error => {
      console.log(error);
    });
    this.router.navigate(['end']);
  }

  SetupWechatShare() {
    this.recordService.getWxParameters('welcome').subscribe((resp) => {
      const imageUrl = environment.domainUrl + '/assets/H5/Official_DreamOn_Logo_JJ_Col_Butterfly_Stack.png';
      const shareLink = environment.domainUrl + '/bund18/shareCard/' + localStorage.getItem('selectId');

      // load from pre-load parameters, also from 3th party service
      wx.config({
        debug: false,
        appId: resp.appId.toString(),
        timestamp: resp.timestamp.toString(),
        nonceStr: resp.nonceStr.toString(),
        signature: resp.signature.toString(),
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
      });

      wx.ready(() => {
        wx.onMenuShareTimeline({
          title: '摇一摇，摇出你的2019新年运势',
          link: shareLink,
          imgUrl: imageUrl,
          success: () => {this.SendShareInfoToServer( 'moments' ); },
          cancel: () => {},
        }),
        wx.onMenuShareAppMessage({
          title: '摇一摇，摇出你的2019新年运势',
          desc: 'BUND18的二重奏:外滩十八号圣诞新年艺术装置',
          link: shareLink,
          imgUrl: imageUrl,
          type: 'link',
          success: () => {this.SendShareInfoToServer('friends'); },
          cancel: () => {},
        })
      });
    });
  }

}
