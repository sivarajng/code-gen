import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'materialize-css/dist/js/materialize.js'
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

import { appRoutes } from './app.routes';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
