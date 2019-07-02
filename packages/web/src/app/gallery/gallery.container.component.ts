import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Gallery } from '@memmy/model';

@Component({
  selector: 'app-gallery-container',
  template: `<app-gallery [gallery]="gallery | async"></app-gallery>`
})
export class GalleryContainerComponent {
  constructor(private route: ActivatedRoute) { }

  gallery = this.route.data.pipe(
    map(data => data.gallery as Gallery),
  );
}
