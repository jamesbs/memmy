import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';
import { GalleryProps } from '@memmy/model';
import { galleryToListItem } from './gallery-to-list-item';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashComponent {
  @Input() galleries: GalleryProps[];

  galleriesToListItems = (galleries: GalleryProps[]) => galleries.map(galleryToListItem);

  addGallery = () => { 
    console.log('click');
  };

  invite = () => {
    console.log('invite');
  }
  upload = () => {
    console.log('upload');
  }

  logout = () => {
    console.log('logging out');
  }
}
