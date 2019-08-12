import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GalleryProps } from '@memmy/model';
import { ServerCredentialsService } from '../model/auth/server-credentials.service';
import { GalleryService } from '../model/gallery.service';
import { responseOf } from '../core/response-of';
import { galleriesReceived } from '../model/state/action/gallery/galleries-received';
import { Store } from '@ngrx/store';
import { RootState } from '../model/state/store/root';

@Injectable({
  providedIn: 'root'
})
export class DashGalleriesResolver implements Resolve<GalleryProps[]> {
  constructor(
    private gallery: GalleryService,
    private serverCredentials: ServerCredentialsService,
    private store: Store<RootState>) { }

  resolve() {
    return responseOf(this.gallery.getGalleriesByToken(this.serverCredentials.credentials))
      .then(galleries => {
        this.store.dispatch(galleriesReceived({ galleries }));
        return galleries;
      });
  }
}
