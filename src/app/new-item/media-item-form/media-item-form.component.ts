import { MediaItemService } from './../../services/media-item.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mediaItemYearValidate } from 'src/app/shared/mediaItemYear.validator';
import { MediaItem } from 'src/app/models/media-item';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css'],
})
export class MediaItemFormComponent implements OnInit {
  mediaItemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mediaItemService: MediaItemService
  ) {}

  ngOnInit(): void {
    this.mediaItemForm = this.fb.group({
      medium: ['Movies'],
      name: ['', [Validators.required]],
      category: ['Action'],
      year: ['', [mediaItemYearValidate]],
    });
  }

  get year() {
    return this.mediaItemForm.get('year');
  }

  onSubmit() {
    const mediaItem: MediaItem = {
      id: this.mediaItemService.mediaItems.length + 1,
      ...this.mediaItemForm.value,
    };
    this.mediaItemService.addMediaItem(mediaItem);
  }
}
