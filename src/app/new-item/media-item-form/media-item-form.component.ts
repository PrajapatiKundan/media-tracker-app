import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [''],
      category: ['Action'],
      year: [''],
    });
  }

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
  }
}
