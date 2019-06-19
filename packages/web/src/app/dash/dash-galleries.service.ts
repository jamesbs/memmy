import { Injectable } from '@angular/core';
import { UserGalleriesService } from '../model/user-galleries.service';
import { filter, map, first, tap } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Gallery } from '@memmy/model';

@Injectable({
  providedIn: 'root'
})
export class DashGalleriesService implements Resolve<Gallery[]>{

  constructor(private userGalleries: UserGalleriesService) { }

  resolve() {
    return this.userGalleries.getUserGalleries({ id: 'some id' })
      .pipe(
        filter(item => item.body !== undefined),
        first(),
        map(({ body }) => body),
      );
  }
}
