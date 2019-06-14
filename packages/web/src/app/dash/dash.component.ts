import { Component, OnInit, Inject } from '@angular/core';
import { GetUserGalleries, HttpGetUserGalleries } from '../server/get-user-galleries';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  galleries = [];

  constructor(@Inject(GetUserGalleries) private getUserGalleries: HttpGetUserGalleries) { }

  ngOnInit() {
    this.getUserGalleries({ id: 'some id' }).subscribe(galleries => {
      console.log('galleries');
      console.log(galleries);
    })
  }

}
