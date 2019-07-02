import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(mod => mod.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dash/dash.module')
      .then(mod => mod.DashModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module')
      .then(mod => mod.GalleryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
