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

  @Output()
  delete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.delete.emit(this.mediaItem.id);
  }
}
