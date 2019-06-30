import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Gallery } from '@memmy/model';
import { ServerCredentialsService } from '../model/auth/server-credentials.service';
import { GalleryService } from '../model/gallery.service';
import { responseOf } from '../core/response-of';

@Injectable({
  providedIn: 'root'
})
export class DashGalleriesService implements Resolve<Gallery[]> {

  constructor(
    private gallery: GalleryService,
    private serverCredentials: ServerCredentialsService) { }

  resolve() {
    return responseOf(this.gallery.getGalleriesByToken(this.serverCredentials.credentials));
  }
}
