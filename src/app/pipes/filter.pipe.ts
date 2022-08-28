import { MediaItem } from './../models/media-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(mediaItems: MediaItem[], searchText: string): MediaItem[] {
    if (!mediaItems) {
      return [];
    }
    if (!searchText) {
      return mediaItems;
    }
    searchText = searchText.toLowerCase();
    return mediaItems.filter((mediaItem: MediaItem) => {
      return mediaItem.name.toLowerCase().includes(searchText);
    });
  }
}
