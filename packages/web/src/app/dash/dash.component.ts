import { Component, OnInit, Inject } from '@angular/core';
import { UserGalleriesService } from '../server/user-galleries.service';
import { map, filter } from 'rxjs/operators';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Gallery } from '@memmy/model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  galleries = this.userGalleries.getUserGalleries({ id: 'some id' })
    .pipe(
      filter(item => item.body !== undefined),
      map(({ body }) => body.map(gallery => ({
        title: gallery.title,
        subtitle: `${gallery.count} items`,
        background: gallery.thumbs.full,
      }))));

  constructor(private userGalleries: UserGalleriesService) { }

  ngOnInit() {
  }

}
