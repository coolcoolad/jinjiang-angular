import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Record, RecordPost } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class RecordService {
  constructor(private http:HttpClient) { }

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

  put(id: number, record:RecordPost){
    return this.http.put<Record>(`${environment.recordUrl}${id}/`, record, this.httpOptions);
  }  

  retrieve(id: number){
      return this.http.get<Record>(`${environment.recordUrl}${id}/`, this.httpOptions);
  }
}
