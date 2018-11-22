import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    var imageArray = ["../../assets/1.jpg", "../../assets/2.jpg", "../../assets/3.jpg", "../../assets/4.jpg"];
    var selector = Math.floor(Math.random() * 4);
    this.document.canvas.src = imageArray[selector];
    //console.log(imageArray[selector]);
  }

}
