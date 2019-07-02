import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashGalleriesResolver } from './dash-galleries.resolver';
import { DashContainerComponent } from './dash.container.component';

const routes: Routes = [
  {
    path: '',
    component: DashContainerComponent,
    resolve: {
      galleries: DashGalleriesResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // providers: [DashGalleriesResolver],
  exports: [RouterModule],
})
export class DashRoutingModule { }
