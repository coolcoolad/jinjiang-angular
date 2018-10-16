import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteControlService {
  constructor(http:HttpClient) { }

  shakeOn() {

  }

  shakeOff() {

  }

  swipeLeftOn() {

  }

  swipeLeftOff() {

  }

  swipeRightOn() {

  }

  swipeRightOff() {
    
  }
}
