import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  waiting = false;
  deviceInfo = null;
  tmpLog = 'log';

  constructor(
    private recordService: RecordService,
    private router: Router,
    private deviceService: Ng2DeviceService,
  ) { }

  ngOnInit() {
    localStorage.clear();

    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.tmpLog = `${this.deviceInfo.device}`;

    // pre load wechat auth if using ios
    if (`${this.deviceInfo.device}` === 'iphone') {
      localStorage.setItem('isIOS', 'true');

      // ios need to register at root
      this.recordService.getWxParameters('start').subscribe((resp) => {
        localStorage.setItem('appId', resp.appId.toString());
        localStorage.setItem('nonceStr', resp.nonceStr.toString());
        localStorage.setItem('timestamp', resp.timestamp.toString());
        localStorage.setItem('signature', resp.signature.toString());
      });
    } else {
      localStorage.setItem('isIOS', 'false');
    }
  }

  onClickEntry(languageFlag: string) {
    if (this.waiting) {
      return;
    }
    localStorage.setItem('languageFlag', languageFlag);
    this.waiting = true;
    this.recordService.requestLicense().subscribe(license => {
      localStorage.setItem('licenseId', license.id.toString());
      this.waiting = false;
      this.router.navigate(['hint']);
    }, error => {
      console.log(error);

      // this.waiting = false; //for test
      // this.router.navigate(['hint']); 
      // return;

      setTimeout(() => {
        this.onClickEntry(languageFlag);
      }, 2000);
    });
  }
}
