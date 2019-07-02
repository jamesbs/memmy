import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GalleryService } from '../model/gallery.service';
import { ServerCredentialsService } from '../model/auth/server-credentials.service';
import { Gallery } from '@memmy/model';
import { responseOf } from '../core/response-of';

@Injectable({
  providedIn: 'root',
})
export class GalleryResolver implements Resolve<Gallery> {
  constructor(
    private galleryService: GalleryService,
    private serverCredentials: ServerCredentialsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return responseOf(
      this.galleryService.getGallery(
        this.serverCredentials.credentials,
        route.params.galleryId as string,
      ));
  }
}
