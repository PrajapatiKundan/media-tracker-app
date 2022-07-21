export interface MediaItem {
  readonly id: number;
  name: string;
  medium: string;
  category: string;
  year: number | null;
  watchedOn: number | null;
  isFavorite: boolean;
}
