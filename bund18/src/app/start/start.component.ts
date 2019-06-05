import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit { 
  private deviceInfo;
  private valid: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickEntry() {
    this.router.navigate(['bund18/hint']);
  } 

}
