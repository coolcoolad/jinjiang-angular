import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Record, RecordPost, RecordStat, WxPara, License } from '../_models';
import { BadgeRequest, ShareLogPost, Badge, ShareLog } from '../_models';
import { environment } from '../../environments/environment';
import { Choice, ChoiceRequest } from '../_models/choice';

@Injectable()
export class RecordService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  list() {
    return this.http.get<Record[]>(`${environment.recordUrl}`, this.httpOptions);
  }

  create(record: RecordPost) {
    return this.http.post<Record>(`${environment.recordUrl}`, record, this.httpOptions);
  }

  put(id: number, record: RecordPost){
    return this.http.put<Record>(`${environment.recordUrl}${id}/`, record, this.httpOptions);
  }

  retrieve(id: number) {
    return this.http.get<Record>(`${environment.recordUrl}${id}/`, this.httpOptions);
  }

  getDateStat() {
    return this.http.get<RecordStat[]>(`${environment.statUrl}`, this.httpOptions);
  }

  requestBadge(badge: BadgeRequest) {
    return this.http.post<Badge>(`${environment.badgeUrl}`, badge, this.httpOptions);
  }

  saveShareInfo(log: ShareLogPost){
    return this.http.post<ShareLog>(`${environment.shareUrl}`, log ,this.httpOptions);
  }

  checkDevice() {
    return this.http.get(`${environment.deviceCheckUrl}`, this.httpOptions);
  }

  turnOnDevice() {
    return this.http.get(`${environment.deviceOnUrl}`, this.httpOptions);
  }

  turnOffDevice() {
    return this.http.get(`${environment.deviceOffUrl}`, this.httpOptions);
  }

  getWxParameters(page: string) {
    return this.http.get<WxPara>(`${environment.wxloginUrl}${page}/`, this.httpOptions);
  }

  requestLicense() {
    return this.http.get<License>(`${environment.licenseRequestUrl}`, this.httpOptions);
  }

  releaseLicense(selectId) {
    return this.http.get(`${environment.licenseReleaseUrl}/${selectId}/`, this.httpOptions);
  }

  controlDevice(selectId: number) {
    return this.http.get(`${environment.deviceCheckUrl}${selectId}/`);
  }

  openDevice(selectId: number) {
    return this.http.get(`${environment.deviceOnUrl}${selectId}/`);
  }

  closeDevice(selectId: number) {
    return this.http.get(`${environment.deviceOffUrl}${selectId}/`);
  }

  choiceReport(selectId: number) {
    const report: ChoiceRequest = {choice: selectId };
    return this.http.post<Choice>(`${environment.choiceReportUrl}/`, report, this.httpOptions);
  }
}
