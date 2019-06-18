import { Component, OnInit, Inject } from '@angular/core';
import { UserGalleriesService } from '../server/user-galleries.service';
import { map, filter } from 'rxjs/operators';
import { Gallery } from '@memmy/model';
import { Observable } from 'rxjs';
import { galleryToListItem } from './gallery-to-list-item';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  galleries: Observable<Gallery[]> = this.userGalleries.getUserGalleries({ id: 'some id' })
    .pipe(
      filter(item => item.body !== undefined),
      map(({ body }) => body),
    );

  galleryToListItem = galleryToListItem;

  constructor(private userGalleries: UserGalleriesService) { }

  ngOnInit() {
  }
}
