import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';
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
  searchControl = new FormControl();
  searchText: string = '';

  constructor(
    private mediaItemService: MediaItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const medium = params.get('medium');
      if (medium) {
        if (medium === 'Movies' || medium === 'Series') {
          this.medium = medium;
        } else {
          this.medium = '';
        }
        this.getMediaItems();
      }
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value: string) => {
        this.searchText = value;
      });
  }

  getMediaItems() {
    this.mediaItemService
      .getRequest(this.medium)
      .subscribe((mediaItems: MediaItem[]) => {
        this.mediaItems = mediaItems;
      });
  }

  onRemoveMediaItem(id: number) {
    this.mediaItemService.deleteRequest(id).subscribe(() => {
      this.getMediaItems();
    });
  }

  onToggleFavorite(payload: { id: number; isFavorite: boolean }) {
    this.mediaItemService
      .putRequest(payload.id, {
        isFavorite: payload.isFavorite,
      })
      .subscribe(() => {
        this.getMediaItems();
      });
  }
}
