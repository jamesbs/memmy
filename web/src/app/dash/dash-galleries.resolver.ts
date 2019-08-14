import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GalleryProps } from '@memmy/model';
import { responseOf } from '../core/response-of';
import { galleriesReceived } from '../model/state/action/gallery/galleries-received';
import credentials from '../model/auth/credentials';
import dispatch from '../model/state/core/dispatch';
import getGalleriesByToken from '../model/gallery/get-galleries-by-token';

@Injectable({
  providedIn: 'root'
})
export class DashGalleriesResolver implements Resolve<GalleryProps[]> {
  resolve() {
    return responseOf(getGalleriesByToken(credentials()))
      .then(galleries => {
        dispatch(galleriesReceived, { galleries });
        return galleries;
      });
  }
}
