import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { appInjector } from './app/app-injector';
import jss from 'jss';
import jssPreset from 'jss-preset-default';

if (environment.production) {
  enableProdMode();
}

jss.setup(jssPreset());

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => {
    appInjector.injector = ref.injector;
  })
  .catch(err => console.error(err));
