import { Component, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { GalleryService } from 'src/app/model/gallery.service';
import { ServerCredentialsService } from 'src/app/model/auth/server-credentials.service';
import { responseOf } from 'src/app/core/response-of';
import { hasSucceeded, getGenerated } from '@memmy/model';
import { galleryAdded } from 'src/app/model/state/action/gallery/gallery-added';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/model/state/store/root';
@Component({
  selector: 'app-add-gallery-dialog',
  templateUrl: './add-gallery-dialog.component.html',
  styleUrls: ['./add-gallery-dialog.component.css'],
})
export class AddGalleryDialogComponent  {
  constructor(
    private dialogRef: MatDialogRef<AddGalleryDialogComponent>,
    private serverCredentials: ServerCredentialsService,
    private galleryService: GalleryService,
    private store: Store<RootState>,
  ) { }

  readyToUpload = true;

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
      this.serverCredentials.credentials,
      galleryName,
    ))
    .subscribe(response => {
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