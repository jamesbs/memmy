import { Component, OnInit, Inject } from '@angular/core';
import { UserGalleriesService } from '../server/user-galleries.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  galleries = [];

  constructor(private userGalleries: UserGalleriesService) { }

  ngOnInit() {
    this.userGalleries.getUserGalleries({ id: 'some id' }).subscribe(galleries => {
      console.log('galleries');
      console.log(galleries);
    })
  }

}
