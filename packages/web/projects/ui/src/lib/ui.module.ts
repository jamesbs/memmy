import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ModalComponent } from './modal/modal.component';
import { FixedListComponent } from './fixed-list/fixed-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from './simple-header/simple-header.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';

@NgModule({
  declarations: [UiComponent, ModalComponent, FixedListComponent, SimpleHeaderComponent, ActionBarComponent, ActionButtonComponent, ActionDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [UiComponent, ModalComponent, FixedListComponent, SimpleHeaderComponent, ActionBarComponent, ActionButtonComponent],
})
export class UiModule { }
