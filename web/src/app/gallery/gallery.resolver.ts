import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GalleryService } from '../model/gallery.service';
import { Gallery } from '@memmy/model';
import { responseOf } from '../core/response-of';
import credentials from '../model/auth/credentials';

@Injectable({
  providedIn: 'root',
})
export class GalleryResolver implements Resolve<Gallery> {
  constructor(private galleryService: GalleryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return responseOf(
      this.galleryService.getGallery(
        credentials(),
        route.params.galleryId as string,
      ));
  }
}
