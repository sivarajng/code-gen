import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: any;
  public error: String = '';
  constructor(private router: Router, private globalService: GlobalService) {
    this.user = { username: '', password: '' };
  }

  ngOnInit() {
  }

  login() {

    if (this.user.username == 'charan' && this.user.password == 'charan') {
      localStorage.setItem('currentUser', 'currentUser');
      this.globalService.setAuthorization(true);
      this.router.navigate(['/profile']);
    }
    else {
      this.error = "Invalid email/password"
    }

  }
}
