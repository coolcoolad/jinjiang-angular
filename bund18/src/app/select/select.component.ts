import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit { 
  private deviceInfo;
  private valid: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickEntry() {
    setTimeout(()=> {
      this.router.navigate(['']);
    }, 2000);
  } 

}
