import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerModule } from './server/server.module';
import { Environment } from './environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServerModule,
  ],
  providers: [
    {
      provide: Environment,
      useValue: Environment,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
