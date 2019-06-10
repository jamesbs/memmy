import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [UiComponent, ModalComponent],
  imports: [
  ],
  exports: [UiComponent, ModalComponent]
})
export class UiModule { }
