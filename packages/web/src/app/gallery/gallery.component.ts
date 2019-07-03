import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Gallery } from '@memmy/model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  @Input() gallery: Gallery;
}
