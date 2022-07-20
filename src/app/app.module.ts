import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { CategoryListPipe } from './pipes/category-list.pipe';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FavoriteDirective } from './directives/favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemListComponent,
    MediaItemComponent,
    CategoryListPipe,
    CategoryListComponent,
    FavoriteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
