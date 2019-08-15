import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Environment } from './environment';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot(
    //   rootReducer,
    //   {
    //     metaReducers: [
    //       localStorageSync({
    //         rehydrate: true,
    //         keys: [
    //           { server: ['credentials'] } as { server: (keyof typeof initialServerState)[]},
    //         ],
    //       }),
    //     ]
    //   }),
    // StoreDevtoolsModule.instrument({
    //   logOnly: environment.production,
    // }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: Environment,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
