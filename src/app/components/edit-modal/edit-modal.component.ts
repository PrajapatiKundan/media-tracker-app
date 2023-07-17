import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediaItem } from 'src/app/models/media-item';
import { MediaItemService } from 'src/app/services/media-item.service';
import { mediaItemYearValidate } from 'src/app/shared/mediaItemYear.validator';

@Component({
  selector: 'mw-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  @Input()
  mediaItem!: MediaItem;

  @Output()
  close = new EventEmitter();

  mediaItemForm!: FormGroup;
  display: boolean = false;

  constructor(
    private fb: FormBuilder,
    private mediaItemService: MediaItemService
  ) {}

  ngOnInit(): void {
    this.mediaItemForm = this.fb.group({
      medium: [this.mediaItem.medium],
      name: [this.mediaItem.name, [Validators.required]],
      category: [this.mediaItem.category],
      year: [this.mediaItem.year, [mediaItemYearValidate]],
      watchedOn: [this.mediaItem.watchedOn],
    });
  }

  get year() {
    return this.mediaItemForm.get('year');
  }

  onSubmit() {
    const mediaItem: MediaItem = { ...this.mediaItem, ...this.mediaItemForm.value };
    console.log("edit data: ", mediaItem)
    this.mediaItemService
      .putRequest(mediaItem)
      .subscribe(() => {
        this.onClose();
      });
  }

  open() {
    this.display = true;
  }

  onClose() {
    this.close.emit();
  }
}
