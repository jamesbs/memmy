export interface Gallery {
  id: string;
  title: string;
  subtitle: string;
  count: number;
  thumbs: { [key: string]: string };
}
