import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteControlService {
  constructor(
    private http:HttpClient,    
  ) { }

  public deviceNo: number;

  private remoteControlUrl: string;

  checkDeviceOnline() {
    this.http.get(`${environment.remoteUrl}`).subscribe((msg:string)=>{
      console.log(msg);
      if(msg.indexOf("40045") != -1){
        this.deviceNo = 40045;
        this.remoteControlUrl = environment.remoteUrl;
      }
      else if(msg.indexOf("40055") != -1){
        this.deviceNo = 40055;
        this.remoteControlUrl = environment.backup_remoteUrl;
        return true;
      }
      else{ 
        this.remoteControlUrl = environment.remoteUrl;
      }
    });
  }

  shakeOn() {
    return this.http.get<string>(`${environment.remoteUrl}/1/`);
  }

  shakeOff() {
    return this.http.get<string>(`${environment.remoteUrl}/0/`);
  }
}
