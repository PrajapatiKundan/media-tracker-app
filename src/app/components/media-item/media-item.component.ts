import { MediaItem } from './../../models/media-item';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent implements OnInit {
  @Input()
  mediaItem!: MediaItem;

  @Input()
  searchText: string = '';

  @Output()
  delete = new EventEmitter();

  @Output()
  favorite = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.delete.emit(this.mediaItem.id);
  }

  onFavorite() {
    const mediaItem: MediaItem = { ...this.mediaItem, isFavorite: !this.mediaItem.isFavorite }
    this.favorite.emit(mediaItem);
  }

  onEdit() {
    this.edit.emit(this.mediaItem);
  }
}
