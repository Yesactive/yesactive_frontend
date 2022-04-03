import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// Site Main Pages
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';

// Login Pages
import { LoginComponent } from '../components/login/login.component';
import { MemberLoginComponent } from '../components/member-login/member-login.component';
import { ActivityProviderLoginComponent } from '../components/activity-provider-login/activity-provider-login.component';

// Registration Pages
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { RegisterMemberComponent } from '../components/register-member/register-member.component';
import { RegisterActivityProviderComponent } from '../components/register-activity-provider/register-activity-provider.component';


// Main Pages
import { MemberComponent } from '../components/member/member.component';
import { ActivityProviderComponent } from '../components/activity-provider/activity-provider.component';

// Settings Pages
import { MemberSettingsComponent } from '../components/member-settings/member-settings.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'member-login', component: MemberLoginComponent },
  { path: 'activity-provider-login', component: ActivityProviderLoginComponent },

  { path: 'create-account', component: CreateAccountComponent },
  { path: 'register-member', component: RegisterMemberComponent },
  { path: 'register-activity-provider', component: RegisterActivityProviderComponent },
  
  { path: 'member', component: MemberComponent },
  { path: 'member-settings', component: MemberSettingsComponent },
  { path: 'activity-provider', component: ActivityProviderComponent },
  // { path: '**', redirectTo: '' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  /* imports: [
    CommonModule
  ] */
})
export class AppRoutingModule { }
