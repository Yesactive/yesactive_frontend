import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:2022/api/company/';
const API_URL = 'https://yesactiveapi.navson.com/api/company/';
const API_Upload_URL = 'https://yesactiveapi.navson.com/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/* const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarys68xOtZHuez7CWkd' })
}; */

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanyDetails(id: number): Observable<any> {
    return this.http.get(API_URL + 'company/' + id, httpOptions);
  }

  getActivityPreData(dataRec: any): Observable<any> {
    return this.http.post(API_URL + 'activity-pre-data', { dataRec }, httpOptions);
  }

  manageActivity(dataRec: any): Observable<any> {
    return this.http.post(API_URL + 'manage-activity', { dataRec }, httpOptions);
  }
}
