import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Environment } from './environment';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './model/state/store/root';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { initialServerState } from './model/state/store/server/server-state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      rootReducer,
      {
        metaReducers: [
          localStorageSync({
            rehydrate: true,
            keys: [
              { server: ['credentials'] } as { server: (keyof typeof initialServerState)[]},
            ],
          }),
        ]
      }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
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
