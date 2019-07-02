import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ModalComponent } from './modal/modal.component';
import { FixedListComponent } from './fixed-list/fixed-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UiComponent, ModalComponent, FixedListComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [UiComponent, ModalComponent, FixedListComponent],
})
export class UiModule { }
