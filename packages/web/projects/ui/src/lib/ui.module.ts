import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ModalComponent } from './modal/modal.component';
import { FixedListComponent } from './fixed-list/fixed-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from './simple-header/simple-header.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ActionBarBodyDirective } from './action-bar/action-bar-body.directive';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';

@NgModule({
  declarations: [UiComponent, ModalComponent, FixedListComponent, SimpleHeaderComponent, ActionBarComponent, ActionDialogComponent, ActionBarBodyDirective],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [UiComponent, ModalComponent, FixedListComponent, SimpleHeaderComponent, ActionBarComponent, ActionBarBodyDirective],
})
export class UiModule { }
