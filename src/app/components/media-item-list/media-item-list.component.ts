import { MediaItemService } from './../../services/media-item.service';
import { Component, OnInit } from '@angular/core';
import { MediaItem } from 'src/app/models/media-item';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  medium: string = '';

  constructor(
    private mediaItemService: MediaItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const medium = params.get('medium');

      if (medium) {
        if (medium?.toLowerCase() === 'all') {
          this.medium = '';
        } else {
          this.medium = medium;
        }

        this.mediaItemService
          .getMediaItems(this.medium)
          .subscribe((mediaItems: MediaItem[]) => {
            this.mediaItems = mediaItems;
          });
      }
    });
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
