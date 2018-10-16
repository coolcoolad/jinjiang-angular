import { Component, OnInit } from '@angular/core';

import { RecordService } from '../_services/record.service';
import { RemoteControlService } from '../_services/remote-control.service';

@Component({
  selector: 'app-bund18',
  templateUrl: './bund18.component.html',
})
export class Bund18Component implements OnInit {

  constructor(
    private recordService: RecordService,
    private remoteControlService: RemoteControlService,
  ) { }

  ngOnInit() {
  }

  onClickShake() {

  }

  onClickLeft() {

  }

  onClickRight() {

  }

}
