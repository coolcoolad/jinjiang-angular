import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
    setTimeout(() => {
      this.router.navigate(['/bund18/share']);
    }, 2000);
  }

  ngOnInit() {
    
  }
}
