import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard }            from './auth-guard.service';
// import { AuthService }          from './auth.service';

import { LoginComponent }       from '../login/login.component';
import { DashboardComponent }       from '../dashboard/dashboard.component';

const headerRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(headerRoutes)
  ],
  exports: [RouterModule],
  providers: [
    // AuthGuard,
    // AuthService
  ]
})
export class HeaderRoutingModule { }



