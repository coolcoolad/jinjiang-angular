import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';
import { RecordService } from '../_services/record.service';
import { BadgeRequest } from '../_models';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  private deviceInfo;
  private valid: boolean;
  public languageFlag = 'ch';

  constructor(
    private recordService: RecordService,
    private router: Router,
    private deviceService: Ng2DeviceService,
  ) { }

  ngOnInit() {
    this.languageFlag = localStorage.getItem('languageFlag');

    setTimeout(() => {
      this.deviceInfo = this.deviceService.getDeviceInfo();

      const badge: BadgeRequest = {
        browser: `${this.deviceInfo.browser}`,
        version: `${this.deviceInfo.browser_version}`,
        device: `${this.deviceInfo.device}`,
        os: `${this.deviceInfo.os}`,
      }
      this.recordService.requestBadge(badge).subscribe(resp => {
        localStorage.setItem('badgeID', resp.id.toString());
        this.router.navigate(['select']);
      }, error => {
        console.log(error);
        this.router.navigate(['select']);
      });
    }, 3000);
  }
}
