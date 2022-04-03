import { Component } from '@angular/core';

// import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './app.component.scss'
  ]
})
export class AppComponent {
  // title = 'frontend';

  /* private roles: string[] = [];
  isLoggedIn = false;
  // showAdminBoard = false;
  // showModeratorBoard = false;
  username?: string; 
  
  private tokenStorageService: TokenStorageService*/

  constructor() { }

  ngOnInit(): void {
    /* this.isLoggedIn = !!this.tokenStorageService.getToken();

    console.log(this.isLoggedIn);

    if (this.tokenStorageService.getToken()) {
      // this.isLoggedIn = true;
      const userData = this.tokenStorageService.getUser();

      console.log('2 - complete Record = ' + JSON.stringify(userData));
      console.log('2 - user data Record = ' + JSON.stringify(userData.data));
      console.log('name = ' + userData.data.name);
      console.log('authUser = ' + userData.data.authUser);
    } */

    /* if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      // this.username = user.username;

      console.log('2 - complete Record' + JSON.stringify(user));
      console.log('2 - user data Record' + JSON.stringify(user.data));
      console.log('name = ' + user.data.name);
      console.log('authUser = ' + user.data.authUser);
    } */
  }

  /* logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  } */
}
