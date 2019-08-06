import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login.container.component';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
  ],
})
export class LoginModule { }
