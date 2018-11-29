import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RecordService } from '../_services/record.service';
import { ShareLog, ShareLogPost, WxPara } from '../_models';
import { first } from 'rxjs/operators';
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
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) { }

  private wxPara: WxPara;

  private imageArray = ["../../assets/1.png", "../../assets/2.png", "../../assets/3.png", "../../assets/4.png"];

  private currentSelector:number;

  ngOnInit() {

    console.log(location.href.split('#')[0]);
    
    this.currentSelector = Math.floor(Math.random() * 4);
    this.document.canvas.src = this.imageArray[this.currentSelector];
    //console.log(imageArray[selector]);    

    //var imageNum:string = `${this.currentSelector}`;
    //var imageUrl = environment.domainUrl + '/assets/' + imageNum + '.jpg';
    var imageUrl = environment.domainUrl + '/assets/vignette_small.jpg';

    this.recordService.getWxParameters().pipe(first()).subscribe((resp)=>{
      this.wxPara = resp;  
      console.log(this.wxPara);
      
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
        title: '摇一摇，摇出你的2019新年运势',
        link: 'http://mm.wuzhanggui.shop/bund18/welcome',
        imgUrl: imageUrl,
        success: () => {this.SendShareInfoToServer("moments");},
        cancel: () => {},
      }),
      wx.onMenuShareAppMessage({
        title: '摇一摇，摇出你的2019新年运势',
        desc: 'BUND18的二重奏:外滩十八号圣诞新年艺术装置',
        link: 'http://mm.wuzhanggui.shop/bund18/welcome',
        imgUrl: imageUrl,
        type: 'link',
        success: ()=>{this.SendShareInfoToServer("friends");},
        cancel: ()=>{},
      })
    });

    

  }

  SendShareInfoToServer(op:string) {
    var sharepost: ShareLogPost = {
      badgeID: parseInt(localStorage.getItem('badgeID')),
      randomID: this.currentSelector,
      operation: op,
    };

    this.recordService.saveShareInfo(sharepost).pipe(first()).subscribe(()=>{
      console.log("add one share info to database");
    });
  }

}
