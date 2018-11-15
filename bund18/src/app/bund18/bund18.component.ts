import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';
import { RecordService } from '../_services/record.service';
import { RemoteControlService } from '../_services/remote-control.service';
import { Record, RecordPost } from '../_models';
import { Router } from '@angular/router';
import * as shake from 'shake.js';
import { ValueTransformer } from '@angular/compiler/src/util';

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
    private zone: NgZone
  ) { }  

  public CalledFromOutside(newValue:string){
    this.zone.run(()=>{
      console.log(newValue);
      alert("works");
    });
  }
  
  ngOnInit() {
    console.log("test", shake);     
    window['angularComponentRef'] = {
      zone: this.zone,
      componentFn: (value)=>this.CalledFromOutside(value),
      component: this,
    };
  }

  ngOnDestroy() {

  }

  public onClickShake() {
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

    this.router.navigate(['/bund18/display']);
  }

  onClickLeft() {
    var new_record: RecordPost = {
      device: 'bund18',
      operation: 'left',
      status: true
    }

    this.recordService.create(new_record).pipe(first()).subscribe(
      
    )
  }

  onClickRight() {
    var new_record: RecordPost = {
      device: 'bund18',
      operation: 'right',
      status: true
    }

    this.recordService.create(new_record).pipe(first()).subscribe(
      
    )
  }

}
