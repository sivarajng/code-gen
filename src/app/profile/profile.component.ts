import { Component, OnInit } from '@angular/core';
import { generate } from '../service/couponCode';
declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tabTitle: String;
  voucherCode: String;
  constructor() {
    this.tabTitle = 'Dashboard';
    this.voucherCode = '';

  }


  ngOnInit() {
    $(document).ready(function () {
      $('select').material_select();
    });
  }

  goTo(title) {
    this.tabTitle = title;
    $(document).ready(function () {
      $('select').material_select();
    });
  }

  generateCode() {
    this.voucherCode = (generate({ parts: 5, partLen: 6 }));
  }

}
