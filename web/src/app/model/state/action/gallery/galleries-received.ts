import { createAction, props } from '@ngrx/store';
import { GalleryProps } from '@memmy/model';

export const galleriesReceived = createAction(
  '[Dashboard] Received Galleries',
  props<{ galleries: GalleryProps[] }>(),
);