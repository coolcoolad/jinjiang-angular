import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import imgList from '../../imgList';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit { 

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    for(let i=0 ; i < imgList.length; i++) {
      let img = new Image();
      img.src = imgList[i];
    }
  }

  onClickEntry() {
    this.router.navigate(['bund18/hint']);
  } 

}
