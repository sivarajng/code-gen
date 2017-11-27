import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user:object = {user:'',password:''};
  private error:String = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){

    if(){
      localStorage.setItem('currentUser','currentUser');
      this.router.navigate(['/profile']);
    }
    else{

    }

  }
}
