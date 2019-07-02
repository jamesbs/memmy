import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryContainerComponent } from './gallery.container.component';

@NgModule({
  declarations: [GalleryComponent, GalleryContainerComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
  ],
})
export class GalleryModule { }
