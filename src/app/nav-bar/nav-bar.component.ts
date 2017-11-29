import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global';
// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isAuthorized: boolean = false;
  obser: any;
  constructor(private router: Router, private globalService: GlobalService) {
    this.obser = this.globalService.checkAuthorization();
  }

  logout() {
    localStorage.clear();
    this.globalService.setAuthorization(false);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    $(document).ready(function (res) {
      $('.button-collapse').sideNav();
    });

    this.obser.subscribe((val: boolean) => { this.isAuthorized = val; console.log('is auth : ', val) })
  }

}
