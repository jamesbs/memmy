import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashContainerComponent } from './dash.container.component';
import { MatDialogModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { AddGalleryDialogComponent } from '../common/add-gallery-dialog/add-gallery-dialog.component';
import { UiModule } from 'web/projects/ui/src/public-api';

@NgModule({
  declarations: [DashComponent, DashContainerComponent, AddGalleryDialogComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    UiModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    DragDropModule,
    MatIconModule,
  ],
  entryComponents: [
    AddGalleryDialogComponent,
  ],
})
export class DashModule { }
