import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mediaItemYearValidate } from 'src/app/shared/mediaItemYear.validator';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css'],
})
export class MediaItemFormComponent implements OnInit {
  mediaItemForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
  }
}
