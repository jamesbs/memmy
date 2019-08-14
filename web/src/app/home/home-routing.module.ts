import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import isAuthenticatedMatcher from './is-authenticated-matcher';
import { RecentlyLoggedOutGuard } from './recently-logged-out.guard';

export const routes: Routes = [
  {
    matcher: isAuthenticatedMatcher,
    loadChildren: () => import('../dash/dash.module')
      .then(mod => mod.DashModule),
  },
  {
    path: '',
    loadChildren: () => import('../login/login.module')
      .then(mod => mod.LoginModule)
  },
  { 
    path: 'logged-out',
    loadChildren: () => import('../logged-out/logged-out.module')
      .then(mod => mod.LoggedOutModule),
    canActivate: [RecentlyLoggedOutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
