import { MediaItem } from './../../models/media-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent implements OnInit {
  @Input()
  mediaItem!: MediaItem;

  constructor() {}

  ngOnInit(): void {
    console.log(this.mediaItem);
  }

  onDelete() {}
}
