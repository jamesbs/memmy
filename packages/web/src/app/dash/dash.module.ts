import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';
import { UiModule } from 'projects/ui/src/lib/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { DashContainerComponent } from './dash.container.component';
import { MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { AddGalleryDialogComponent } from '../common/add-gallery-dialog/add-gallery-dialog.component';

@NgModule({
  declarations: [DashComponent, DashContainerComponent, AddGalleryDialogComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    UiModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  entryComponents: [
    AddGalleryDialogComponent,
  ],
})
export class DashModule { }
