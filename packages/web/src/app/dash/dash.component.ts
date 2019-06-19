import { Component, OnInit, Inject } from '@angular/core';
import { UserGalleriesService } from '../server/user-galleries.service';
import { map, filter } from 'rxjs/operators';
import { Gallery } from '@memmy/model';
import { Observable } from 'rxjs';
import { galleryToListItem } from './gallery-to-list-item';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'projects/ui/src/lib/fixed-list/list-item';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  galleries: Observable<Gallery[]> = this.route.data.pipe(map(({ galleries }) => galleries));

  galleriesToListItems = (galleries: Gallery[]) => galleries.map(galleryToListItem);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
