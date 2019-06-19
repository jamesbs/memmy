import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';
import { DashGalleriesService } from './dash-galleries.service';

const routes: Routes = [
  { 
    path: '', 
    component: DashComponent,
    resolve: {
      galleries: DashGalleriesService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule { }
