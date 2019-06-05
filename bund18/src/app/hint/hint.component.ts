import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit { 
  private deviceInfo;
  private valid: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickEntry() {
    this.router.navigate(['']);
  } 

}
