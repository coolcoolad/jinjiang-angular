import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit { 
  private diamondFlag = true;
  private gameBoyFlag = true;
  private airPlaneFlag = true;
  private highlightIcon = -1;
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private goToDisplayPage(imgSrc: String) {
    setTimeout(() => {
      this.router.navigate(['bund18/display/'+imgSrc]);
    }, 1000);
  }

  onClickDiamond() {
    //this.diamondFlag = !this.diamondFlag;
    this.highlightIcon = 0;
    this.goToDisplayPage('Money_Screen.png');
  }

  onClickGameBoy() {
    //this.gameBoyFlag = !this.gameBoyFlag;
    this.highlightIcon = 1;
    this.goToDisplayPage('Gamer_Screen.png');
  }
  
  onClickAirPlane() {
    //this.airPlaneFlag = !this.airPlaneFlag;
    this.highlightIcon = 2;
    this.goToDisplayPage('Travel_Screen.png');
  }
  
  onClickHeart() {
    this.highlightIcon = 3;
    this.goToDisplayPage('Love_Screen.png');
  }
  
  onClickSaturn() {
    this.highlightIcon = 4;
    this.goToDisplayPage('Space_Screen.png');
  }
  
  onClickCat() {
    this.highlightIcon = 5;
    this.goToDisplayPage('CatLover_Screen.png');
  }
}
