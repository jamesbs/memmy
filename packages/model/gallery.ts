import { Identifiable } from './primitives/identifiable';

export type Gallery<T = string> = {
  title: string;
  subtitle?: string;
  count: number;
  thumbs: { [key: string]: T };
} & Identifiable;
