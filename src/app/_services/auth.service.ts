import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:2022/api/member/';
// const Activity_Provider_AUTH_API = 'http://localhost:2022/api/company/';

const AUTH_API = 'https://yesactiveapi.navson.com/api/member/';
const Activity_Provider_AUTH_API = 'https://yesactiveapi.navson.com/api/company/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', { username, password }, httpOptions);
  }

  register(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'member-signup', { data }, httpOptions);
  }

  getMemberProfile(id: number): Observable<any> {
    return this.http.get(AUTH_API + 'member/' + id, httpOptions);
  }

  updateMemberProfile(dataRec: any): Observable<any> {
    return this.http.post(AUTH_API + 'update-member-profile', { dataRec }, httpOptions);
  }

  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'refreshtoken', { refreshToken: token }, httpOptions);
  }

  activityProviderlogin(email: string, password: string): Observable<any> {
    return this.http.post(Activity_Provider_AUTH_API + 'activity-provider-login', { email, password }, httpOptions);
  }

  registerActivityProvider(data: any): Observable<any> {
    return this.http.post(Activity_Provider_AUTH_API + 'activity-provider-signup', { data }, httpOptions);
  }
}