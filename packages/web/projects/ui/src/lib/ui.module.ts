import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ModalComponent } from './modal/modal.component';
import { FixedListComponent } from './fixed-list/fixed-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UiComponent, ModalComponent, FixedListComponent],
  imports: [
    CommonModule,
  ],
  exports: [UiComponent, ModalComponent, FixedListComponent],
})
export class UiModule { }
