import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShakeService {

  constructor() { }

  private hasDeviceMotion = 'ondevicemotion' in window;

  private options = {
    threshold: 15, //default velocity threshold for shake to register
    timeout: 1000 //default interval between events
  }

  private lastTime = new Date();

  private lastX = null;
  private lastY = null;
  private lastZ = null;

  private event = null;

  reset() {
    this.lastTime = new Date();
    this.lastX = null;
    this.lastY = null;
    this.lastZ = null;
  }

  start() {   
    this.event = document.createEvent('Event');
    this.event.initEvent('shake', true, true); 

    this.reset();
    if(this.hasDeviceMotion) {
      window.addEventListener('devicemotion', this, false);
    }
  }

  stop() {
    if (this.hasDeviceMotion) {
      window.removeEventListener('devicemotion', this, false);
    }
    this.reset();
  }

  devicemotion(e) {
    var current = e.accelerationIncludingGravity;
    var currentTime;
    var timeDifference;
    var deltaX = 0;
    var deltaY = 0;
    var deltaZ = 0;

    if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;
        return;
    }

    deltaX = Math.abs(this.lastX - current.x);
    deltaY = Math.abs(this.lastY - current.y);
    deltaZ = Math.abs(this.lastZ - current.z);

    if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
        //calculate time in milliseconds since last shake registered
        currentTime = new Date();
        timeDifference = currentTime.getTime() - this.lastTime.getTime();

        if (timeDifference > this.options.timeout) {
            window.dispatchEvent(this.event);
            this.lastTime = new Date();
        }
    }

    this.lastX = current.x;
    this.lastY = current.y;
    this.lastZ = current.z;
  }

  handleEvent(e) {
    if (typeof (this[e.type]) === 'function') {
      return this[e.type](e);
    }
  }
}
