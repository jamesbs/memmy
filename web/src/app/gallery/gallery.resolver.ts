import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Gallery } from '@memmy/model';
import { responseOf } from '../core/response-of';
import credentials from '../model/auth/credentials';
import getGalleryById from '../model/gallery/get-gallery-by-id';

@Injectable({
  providedIn: 'root',
})
export class GalleryResolver implements Resolve<Gallery> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return responseOf(
      getGalleryById(
        credentials(),
        route.params.galleryId as string,
      ));
  }
}
