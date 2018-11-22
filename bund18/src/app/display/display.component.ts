import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../_services/record.service';
import { first } from 'rxjs/operators';
import { RecordPost } from '../_models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  constructor(
    private router: Router,
    private recordService: RecordService,
  ) {
    setTimeout(() => {
      this.router.navigate(['/bund18/share']);
      this.recordService.turnOffDevice().pipe(first()).subscribe((resp)=>{
        if(resp == 200) {
          var new_record: RecordPost = {
            badgeID: parseInt(localStorage.getItem('badgeID')),
            device: 'bund18',
            operation: 'shake',
            status: false
          }
          this.recordService.create(new_record).pipe(first()).subscribe(()=>{
            console.log("add one record to server showing off");
          }); 
        }
      });
    }, 8000);
  }

  ngOnInit() {
    
  }
}
