import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  imgSrc = '';
  pathPrefix = '../../assets/gif/';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.imgSrc = this.pathPrefix + this.activatedRoute.snapshot.params['imgSrc'];
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['bund18/share']);
    }, 5000);
  }
}
