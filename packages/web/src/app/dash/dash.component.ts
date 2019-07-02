import { Component, OnInit, Inject } from '@angular/core';
import { map} from 'rxjs/operators';
import { GalleryProps } from '@memmy/model';
import { Observable } from 'rxjs';
import { galleryToListItem } from './gallery-to-list-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  galleries: Observable<GalleryProps[]> = this.route.data.pipe(map(({ galleries }) => galleries));

  galleriesToListItems = (galleries: GalleryProps[]) => galleries.map(galleryToListItem);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
