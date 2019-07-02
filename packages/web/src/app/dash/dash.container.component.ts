import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryProps } from '@memmy/model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash-container',
  template: `<app-dash [galleries]="galleries | async"></app-dash>`
})
export class DashContainerComponent {

  galleries: Observable<GalleryProps[]> = this.route.data.pipe(map(({ galleries }) => galleries));

  constructor(private route: ActivatedRoute) { }
}
