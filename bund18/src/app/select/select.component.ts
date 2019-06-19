import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit { 
  private highlightIcon = -1;
  private showError = false;
  
  constructor(
    private router: Router,
    private recordService: RecordService,
  ) { }

  ngOnInit() {
  }

  private goToDisplayPage(imgSrc: String) {
    setTimeout(() => {
      this.router.navigate(['bund18/display/'+imgSrc]);
    }, 1000);
  }

  private controlDevice(deviceId: Number) {
    this.recordService.controlDevice(deviceId).subscribe(resp => {
      this.showError = false;
      this.goToDisplayPage(`${deviceId}.gif`);
    }, error => {
      console.log(error);
      this.showError = true;
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
