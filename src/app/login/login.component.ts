import { Component, OnInit, ngMod } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: object;
  private error: String = '';
  constructor(private router: Router) {
    this.user = { email: '', password: '' };
  }

  ngOnInit() {
  }

  login() {

    if (this.user.email == 'charan' && this.user.password == 'charan') {
      localStorage.setItem('currentUser', 'currentUser');
      this.router.navigate(['/profile']);
    }
    else {
      this.error = "Invalid email/password"
    }

  }
}
