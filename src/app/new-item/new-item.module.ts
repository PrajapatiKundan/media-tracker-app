import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewItemRoutingModule } from './new-item-routing.module';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';


@NgModule({
  declarations: [
    MediaItemFormComponent
  ],
  imports: [
    CommonModule,
    NewItemRoutingModule
  ]
})
export class NewItemModule { }
