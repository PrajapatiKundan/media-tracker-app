import { map, Observable } from 'rxjs';
import { MediaItem } from './../models/media-item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  mediaItems: MediaItem[] = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
    },
  ];
  constructor(private http: HttpClient) {}

  getMediaItems(medium: string): Observable<MediaItem[]> {
    // Here get method will return object which contains property mediaItem of type MediaItem[]
    return this.http
      .get<{ mediaItems: MediaItem[] }>('mediaitems', { params: { medium } })
      .pipe(
        map((response) => {
          return response.mediaItems;
        })
      );
  }

  removeMediaItem(id: number): MediaItem[] {
    this.mediaItems = this.mediaItems.filter(
      (mediaItem) => mediaItem.id !== id
    );
    return this.mediaItems;
  }

  updateMediaItem(id: number, payload: Partial<MediaItem>): MediaItem[] {
    this.mediaItems = this.mediaItems.map((mediaItem) => {
      if (mediaItem.id === id) {
        return {
          ...mediaItem,
          ...payload,
        };
      }
      return mediaItem;
    });
    return this.mediaItems;
  }

  addMediaItem(mediaItem: MediaItem): void {
    console.log('mediaItem: ', mediaItem);
    this.mediaItems.push(mediaItem);
    console.log('mediaItems: ', this.mediaItems);
  }
}
