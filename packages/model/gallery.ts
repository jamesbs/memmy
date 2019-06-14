import { Identifiable } from './primitives/identifiable';

export type Gallery = {
  title: string;
  subtitle?: string;
  count: number;
  thumbs: { [key: string]: string };
} & Identifiable;
