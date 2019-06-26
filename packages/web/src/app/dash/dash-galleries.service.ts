import { Injectable } from '@angular/core';
import { UserGalleriesService } from '../model/user-galleries.service';
import { filter, map, first, tap } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Gallery } from '@memmy/model';
import { isHttpResponse, getResponseBody } from '../core/http-response';

@Injectable({
  providedIn: 'root'
})
export class DashGalleriesService implements Resolve<Gallery[]> {

  constructor(private userGalleries: UserGalleriesService) { }

  resolve() {
    return this.userGalleries.getUserGalleries({ id: 'some id' })
      .pipe(
        filter(isHttpResponse),
        first(),
        map(getResponseBody),
      );
  }
}
