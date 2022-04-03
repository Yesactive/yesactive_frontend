import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing/app-routing.module';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/*  Login Pages */
import { LoginComponent } from './components/login/login.component';
import { MemberLoginComponent } from './components/member-login/member-login.component';
import { ActivityProviderLoginComponent } from './components/activity-provider-login/activity-provider-login.component';

import { CreateAccountComponent } from './components/create-account/create-account.component';

/*  Register Member */
import { RegisterMemberComponent } from './components/register-member/register-member.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { RegisterMemberEmailDetailComponent } from './components/register-member-email-detail/register-member-email-detail.component';
import { RegisterMemberPasswordDetailComponent } from './components/register-member-password-detail/register-member-password-detail.component';
import { RegisterMemberPersonalDetailComponent } from './components/register-member-personal-detail/register-member-personal-detail.component';
import { RegisterMemberPreferencesDetailComponent } from './components/register-member-preferences-detail/register-member-preferences-detail.component';

/*  Register Activity Provider */
import { RegisterActivityProviderComponent } from './components/register-activity-provider/register-activity-provider.component';
import { RegisterCompanyProfileComponent } from './components/register-company-profile/register-company-profile.component';
import { RegisterVenueComponent } from './components/register-venue/register-venue.component';
import { RegisterInstructorsComponent } from './components/register-instructors/register-instructors.component';
import { RegisterBankComponent } from './components/register-bank/register-bank.component';
import { RegisterCompanyBioComponent } from './components/register-company-bio/register-company-bio.component';

/*  Pages */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MemberComponent } from './components/member/member.component';
import { ActivityProviderComponent } from './components/activity-provider/activity-provider.component';
import { BookActivityComponent } from './components/book-activity/book-activity.component';

/*  Calendar Events */
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

/* File Upload Library */
import { NgxUploaderModule } from 'ngx-uploader';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxTypeaheadModule } from 'ngx-typeahead';

/*  Social Media Icons */
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { LoaderService } from './_services/loader.service';
import { LoaderInterceptor } from './_helpers/loader-interceptor.service';
import { SiteLoaderComponent } from './components/site-loader/site-loader.component';

// Import your AvatarModule
import { AvatarModule } from 'ngx-avatars';
import { AddNewTrainerComponent } from './components/add-new-trainer/add-new-trainer.component';
import { AddNewActivityComponent } from './components/add-new-activity/add-new-activity.component';
import { MemberSettingsComponent } from './components/member-settings/member-settings.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CreateAccountComponent,
    RegisterMemberComponent,
    RegisterActivityProviderComponent,
    MemberComponent,
    PasswordStrengthComponent,
    RegisterMemberEmailDetailComponent,
    RegisterMemberPasswordDetailComponent,
    RegisterMemberPersonalDetailComponent,
    RegisterMemberPreferencesDetailComponent,
    RegisterCompanyProfileComponent,
    SiteLoaderComponent,
    RegisterVenueComponent,
    RegisterInstructorsComponent,
    RegisterBankComponent,
    RegisterCompanyBioComponent,
    ActivityProviderComponent,
    BookActivityComponent,
    AddNewTrainerComponent,
    AddNewActivityComponent,
    MemberLoginComponent,
    ActivityProviderLoginComponent,
    MemberSettingsComponent,
    // FileSelectDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    NgxUploaderModule,
    ShareButtonsModule,
    ShareIconsModule,
    AvatarModule,
    NgbModule,
    NgxTypeaheadModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    authInterceptorProviders,
    LoaderService,
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
