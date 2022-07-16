export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number | null;
  watchedOn: number | null;
  isFavorite: boolean;
}
