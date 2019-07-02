import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ModalComponent } from './modal/modal.component';
import { FixedListComponent } from './fixed-list/fixed-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from './simple-header/simple-header.component';

@NgModule({
  declarations: [UiComponent, ModalComponent, FixedListComponent, SimpleHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [UiComponent, ModalComponent, FixedListComponent, SimpleHeaderComponent],
})
export class UiModule { }
