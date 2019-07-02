import { Identifiable } from './primitives/identifiable';

export type GalleryProps<T = string> = {
  title: string;
  subtitle?: string;
  count: number;
  thumbs: { [key: string]: T };
} & Identifiable;

export type Gallery<T = string> = {
  images: string[]
} & GalleryProps<T>;
