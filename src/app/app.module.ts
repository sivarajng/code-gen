import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { GlobalService } from './service/global';

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
    FormsModule,
    appRoutes
  ],
  providers: [AuthGuard,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
