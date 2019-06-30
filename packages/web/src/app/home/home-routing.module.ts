import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { isAuthenticatedMatcher } from './is-authenticated.matcher';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
