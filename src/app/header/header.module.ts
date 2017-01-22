import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header.component';

import { HeaderRoutingModule } from './header-routing.module';
import { LoginModule }       from '../login/login.module';
import { DashboardModule }       from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    LoginModule,
    DashboardModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
