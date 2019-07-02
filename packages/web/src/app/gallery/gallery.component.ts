import { Component, Input } from '@angular/core';
import { Gallery } from '@memmy/model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() gallery: Gallery;
}
