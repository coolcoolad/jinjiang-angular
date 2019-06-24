import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';

import { RecordPost } from '../_models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  private highlightIcon = -1;
  public showError = false;
  public languageFlag = 'ch';
  private loading = false;

  constructor(
    private router: Router,
    private recordService: RecordService,
  ) { }

  ngOnInit() {
    this.languageFlag = localStorage.getItem('languageFlag');
  }

  private goToDisplayPage(imgSrc: String) {
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['display/' + imgSrc]);
    }, 500);
  }

  private controlDevice(selectId: number) {
    if (this.loading) {
      return;
    }
    this.loading = true;
    localStorage.setItem('selectId',  selectId.toString());
    this.recordService.openDevice(selectId).subscribe(resp => {
      this.showError = false;

      // Send visit record if success
      const new_record: RecordPost = {
        badgeID: parseInt(localStorage.getItem('badgeID')),
        device: 'jjpark',
        operation: 'select',
        status: true
      };
      this.recordService.create(new_record).subscribe();

      this.goToDisplayPage(`${selectId}.gif`);
    }, error => {
      console.log(error);
      this.loading = false;
      this.showError = true;

      // Send visit record if failed
      const new_record: RecordPost = {
        badgeID: parseInt(localStorage.getItem('badgeID')),
        device: 'jjpark',
        operation: 'select',
        status: false
      };
      this.recordService.create(new_record).subscribe();
    });
  }

  onClickDiamond() {
    this.highlightIcon = 0;
    this.controlDevice(1);
  }

  onClickGameBoy() {
    this.highlightIcon = 1;
    this.controlDevice(2);
  }

  onClickAirPlane() {
    this.highlightIcon = 2;
    this.controlDevice(3);
  }

  onClickHeart() {
    this.highlightIcon = 3;
    this.controlDevice(4);
  }

  onClickSaturn() {
    this.highlightIcon = 4;
    this.controlDevice(5);
  }

  onClickCat() {
    this.highlightIcon = 5;
    this.controlDevice(6);
  }

}
