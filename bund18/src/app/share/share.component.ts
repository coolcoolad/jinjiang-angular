import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RecordService } from '../_services/record.service';
import { ShareLog, ShareLogPost } from '../_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(
    private recordService: RecordService,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    var imageArray = ["../../assets/1.jpg", "../../assets/2.jpg", "../../assets/3.jpg", "../../assets/4.jpg"];
    var selector = Math.floor(Math.random() * 4);
    this.document.canvas.src = imageArray[selector];
    //console.log(imageArray[selector]);

    var sharepost: ShareLogPost = {
      badgeID: parseInt(localStorage.getItem('badgeID')),
      randomID: selector,
    };

    this.recordService.saveShareInfo(sharepost).pipe(first()).subscribe(()=>{
      console.log("add one share info to database");
    });
  }

}
