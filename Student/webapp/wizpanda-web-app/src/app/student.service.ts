import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URLS } from './constant/app.constants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  saveStudentData(data): Observable<any> {
    var saveURL = APP_URLS.BASEURL + '/saverecord'
    return this.http.post(saveURL, data);
  }

  getAll(): Observable<any> {
    var getURL = APP_URLS.BASEURL + '/getrecords';
    return this.http.get(getURL);
  }
}
