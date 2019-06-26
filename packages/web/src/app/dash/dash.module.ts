import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';
import { UiModule } from 'projects/ui/src/lib/ui.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    UiModule,
    HttpClientModule,
  ]
})
export class DashModule { }
