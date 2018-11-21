import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';
import { RecordService } from '../_services/record.service';
import { RemoteControlService } from '../_services/remote-control.service';
import { ShakeService } from '../_services/shake.service';
import { Record, RecordPost } from '../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bund18',
  templateUrl: './bund18.component.html',
  styleUrls: ['./bund18.component.css']
})

export class Bund18Component implements OnInit, OnDestroy {

  constructor(
    private recordService: RecordService,
    private remoteControlService: RemoteControlService,
    private router: Router,
    private shakeService: ShakeService,
  ) {
    setTimeout(() => {
      this.router.navigate(['/bund18/display']);
    }, 10000);
  }  

  
  ngOnInit() {   
    this.shakeService.start();
    window.addEventListener('shake', ()=> {this.OnShake()}, false);
  }

  ngOnDestroy() {
    window.removeEventListener('shake', null, false);
  }

  OnShake() {
    console.log("on click shake button");
    var new_record: RecordPost = {
      device: 'bund18',
      operation: 'shake',
      status: true
    }

    this.recordService.create(new_record).pipe(first()).subscribe(()=>{
        console.log("add one record to server");
      }
    )

    this.remoteControlService.shakeOn().pipe(first()).subscribe((resp)=>{
      
    });  
    
    this.router.navigate(['/bund18/display']);
  }

  onClickShake() {
    console.log("on click shake button");
    var new_record: RecordPost = {
      device: 'bund18',
      operation: 'shake',
      status: true
    }

    this.recordService.create(new_record).pipe(first()).subscribe(()=>{
        console.log("add one record to server");
      }
    )

    this.remoteControlService.shakeOn().pipe(first()).subscribe((resp)=>{
      
    });  
    
    this.router.navigate(['/bund18/display']);
  }
  
}
