import { Component, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { hasSucceeded, getGenerated } from '@memmy/model';
import { Store } from '@ngrx/store';
import { GalleryService } from '../../model/gallery.service';
import { RootState } from '../../model/state/store/root';
import { responseOf } from '../../core/response-of';
import { galleryAdded } from '../../model/state/action/gallery/gallery-added';
import credentials from '../../model/auth/credentials';

@Component({
  selector: 'app-add-gallery-dialog',
  templateUrl: './add-gallery-dialog.component.html',
  styleUrls: ['./add-gallery-dialog.component.css'],
})
export class AddGalleryDialogComponent  {
  constructor(
    private dialogRef: MatDialogRef<AddGalleryDialogComponent>,
    private galleryService: GalleryService,
    private store: Store<RootState>,
  ) { }

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
    responseOf(this.galleryService.addGallery(
      credentials(),
      galleryName,
    ))
    .then(response => {
      if(hasSucceeded(response)) {
        this.store.dispatch(galleryAdded({ gallery: getGenerated(response) }));
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