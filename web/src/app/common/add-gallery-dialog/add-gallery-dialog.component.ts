import { Component, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { hasSucceeded, getGenerated } from '@memmy/model';
import { responseOf } from '../../core/response-of';
import { galleryAdded } from '../../model/state/action/gallery/gallery-added';
import credentials from '../../model/auth/credentials';
import dispatch from '../../model/state/common/dispatch';
import addGallery from '../../model/gallery/add-gallery';

@Component({
  selector: 'app-add-gallery-dialog',
  templateUrl: './add-gallery-dialog.component.html',
  styleUrls: ['./add-gallery-dialog.component.css'],
})
export class AddGalleryDialogComponent  {
  constructor(private dialogRef: MatDialogRef<AddGalleryDialogComponent>) { }

  readyToUpload = false;

  get title() {
    return this.readyToUpload
      ? 'Upload some photos'
      : 'Create a new gallery';
  }

  cancel() {
    this.dialogRef.close();
  }

  done() {
    this.dialogRef.close();
  }

  add(galleryName: string) {
    responseOf(addGallery(
      credentials(),
      galleryName,
    ))
    .then(response => {
      if(hasSucceeded(response)) {
        dispatch(galleryAdded, { gallery: getGenerated(response) });
        this.readyToUpload = true;
      }
    })
  }


  @HostListener('drop', ['$event'])
  itemDropped(event: DragEvent) {
    if(this.readyToUpload) {
      event.preventDefault();
    }
  }

  @HostListener('dragover', ['$event'])
  itemDragged(event: DragEvent) {
    if(this.readyToUpload) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}