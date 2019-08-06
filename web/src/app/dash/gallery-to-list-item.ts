import { GalleryProps } from '@memmy/model';
import { ListItem } from 'web/projects/ui/src/lib/fixed-list/list-item';

export function galleryToListItem(gallery: GalleryProps): ListItem {
  return {
    title: gallery.title,
    subtitle: gallery.count === 1 ? '1 item' : `${gallery.count} items`,
    image: gallery.thumbs.full,
    link: `/gallery/${gallery.id}`,
  };
}
