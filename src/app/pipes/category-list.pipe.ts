import { MediaItem } from './../models/media-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList',
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems: MediaItem[]): string[] {
    const categories: string[] = [];

    /**
     * If mediaItem has category which is not present in categories list then push it into the list.
     * categories list contains only unique categories.
     */
    mediaItems.forEach((mediaItem) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });

    return categories;
  }
}
