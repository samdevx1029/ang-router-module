import { Component, OnInit } from '@angular/core';

import { Router,
         NavigationExtras } from '@angular/router';

import { LoginComponent }       from '../login/login.component';
import { DashboardComponent }       from '../dashboard/dashboard.component';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
