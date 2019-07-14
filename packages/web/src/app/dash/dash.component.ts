import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';
import { GalleryProps, nullOperation } from '@memmy/model';
import { galleryToListItem } from './gallery-to-list-item';
import { MatDialog } from '@angular/material';
import { AddGalleryDialogComponent } from '../common/add-gallery-dialog/add-gallery-dialog.component';

import jss from 'jss';
import { actionStyle } from './dash.component.style';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashComponent {
  @Input() galleries: GalleryProps[];
  @Input() logout = nullOperation;

  sheet = jss.createStyleSheet({
    action: actionStyle,
  });

  constructor(private dialog: MatDialog) { }

  galleriesToListItems = (galleries: GalleryProps[]) => galleries.map(galleryToListItem);

  add = () => { 
    this.dialog.open(AddGalleryDialogComponent);
  };

  invite = () => {
    console.log('invite');
  }
  
  upload = () => {
    console.log('upload');
  }

  ngOnInit() {
    this.sheet.attach();
  }

  ngOnDestroy() {
    this.sheet.detach();
  }
}
