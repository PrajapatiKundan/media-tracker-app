import { MediaItemService } from './../../services/media-item.service';
import { Component, OnInit } from '@angular/core';
import { MediaItem } from 'src/app/models/media-item';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: MediaItem[] = [];

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.getMediaItems();
  }

  onRemoveMediaItem(id: number) {
    this.mediaItems = this.mediaItemService.removeMediaItem(id);
    console.log('mediaItemList', this.mediaItems);
  }

  onToggleFavorite(payload: { id: number; isFavorite: boolean }) {
    this.mediaItems = this.mediaItemService.updateMediaItem(payload.id, {
      isFavorite: payload.isFavorite,
    });
  }
}
