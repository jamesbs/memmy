import { GalleryProps } from '@memmy/model';
import { ListItem } from 'projects/ui/src/lib/fixed-list/list-item';

export function galleryToListItem(gallery: GalleryProps): ListItem {
  return {
    title: gallery.title,
    subtitle: `${gallery.count} items`,
    image: gallery.thumbs.full,
    link: `/gallery/${gallery.id}`,
  };
}
