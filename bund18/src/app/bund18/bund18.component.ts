import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { RecordService } from '../_services/record.service';
import { RemoteControlService } from '../_services/remote-control.service';
import { Record, RecordPost } from '../_models';

@Component({
  selector: 'app-bund18',
  templateUrl: './bund18.component.html',
  styleUrls: ['./bund18.component.css']
})

export class Bund18Component implements OnInit {

  constructor(
    private recordService: RecordService,
    private remoteControlService: RemoteControlService,
  ) { }

  ngOnInit() {
  }

  onClickShake() {
    var new_record: RecordPost = {
      device: 'bund18',
      operation: 'shake',
      status: true
    }

    this.recordService.create(new_record).pipe(first()).subscribe(
      
    )
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
