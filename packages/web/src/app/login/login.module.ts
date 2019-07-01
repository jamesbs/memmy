import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login.container.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
