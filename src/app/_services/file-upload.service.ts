import { Injectable } from '@angular/core';
// import { User } from './user';
import { Observable, throwError } from 'rxjs';

import { HttpHeaders, HttpErrorResponse, HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {

  // baseURL = 'http://localhost:4000/api';
  baseApiUrl = 'https://yesactiveapi.navson.com/api/upload';
  baseUrl = 'https://yesactiveapi.navson.com/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get Users
  /* getUsers() {
    return this.http.get(this.baseURL);
  } */

  // Returns an observable
  /* upload(file: File): Observable<any> {

    // Create form data
    const formData = new FormData();

    console.log(file);
    // console.log(file[0]);

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  } */

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }


  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  // Create User
  /* addUser(name: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('avatar', profileImage);
    return this.http.post<User>(`${this.baseURL}/create-user`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  } */
  // Error handling
  /* errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  } */
}