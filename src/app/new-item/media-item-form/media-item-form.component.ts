import { MediaItemService } from './../../services/media-item.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mediaItemYearValidate } from 'src/app/shared/mediaItemYear.validator';
import { MediaItem } from 'src/app/models/media-item';
import { Router } from '@angular/router';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css'],
})
export class MediaItemFormComponent implements OnInit {
  mediaItemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mediaItemService: MediaItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let today = new Date();
    this.mediaItemForm = this.fb.group({
      medium: ['Movies'],
      name: ['', [Validators.required]],
      category: ['Action'],
      year: ['', [mediaItemYearValidate]],
      watchedOn: [today],
    });
  }

  get year() {
    return this.mediaItemForm.get('year');
  }

  onSubmit() {
    const mediaItem: MediaItem = { ...this.mediaItemForm.value };
    this.mediaItemService.postRequest(mediaItem).subscribe(() => {
      this.router.navigate(['/', mediaItem.medium]);
    });
  }
}
