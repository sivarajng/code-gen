import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(res) {
      $('.parallax').parallax();
    });
  }

}
