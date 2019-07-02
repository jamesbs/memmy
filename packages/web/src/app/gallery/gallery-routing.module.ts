import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryContainerComponent } from './gallery.container.component';
import { GalleryResolver } from './gallery.resolver';

const routes: Routes = [
  {
    path: ':galleryId',
    component: GalleryContainerComponent,
    resolve: {
      gallery: GalleryResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
