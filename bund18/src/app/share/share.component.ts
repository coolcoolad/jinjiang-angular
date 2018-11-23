import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RecordService } from '../_services/record.service';
import { ShareLog, ShareLogPost, WxPara } from '../_models';
import { first } from 'rxjs/operators';
import * as wx from 'weixin-js-sdk';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(
    private recordService: RecordService,
    @Inject(DOCUMENT) private document: any
  ) { }

  private wxPara: WxPara;

  private imageArray = ["../../assets/1.jpg", "../../assets/2.jpg", "../../assets/3.jpg", "../../assets/4.jpg"];

  private currentSelector:number;

  ngOnInit() {
    
    this.currentSelector = Math.floor(Math.random() * 4);
    this.document.canvas.src = this.imageArray[this.currentSelector];
    //console.log(imageArray[selector]);

    var sharepost: ShareLogPost = {
      badgeID: parseInt(localStorage.getItem('badgeID')),
      randomID: this.currentSelector,
    };

    this.recordService.saveShareInfo(sharepost).pipe(first()).subscribe(()=>{
      console.log("add one share info to database");
    });

    this.recordService.getWxParameters().pipe(first()).subscribe((resp)=>{
      this.wxPara = resp;  
      
      wx.config({
        debug: false,
        appId: this.wxPara.appId,
        timestamp: this.wxPara.timestamp,
        nonceStr: this.wxPara.nonceStr,
        signature: this.wxPara.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
      });
    });    

    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: 'BUND18的二重奏',
        link: '',
        imgUrl: this.imageArray[this.currentSelector],
        success: () => {},
        cancel: () => {},
      }),
      wx.onMenuShareAppMessage({
        title: 'BUND18的二重奏',
        desc: '外滩十八号圣诞新年艺术装置',
        link: '',
        imgUrl: this.imageArray[this.currentSelector],
        type: 'link',
        success: ()=>{},
        cancel: ()=>{},
      })
    });
  }

}
