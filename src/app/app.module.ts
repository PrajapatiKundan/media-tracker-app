import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { CategoryListPipe } from './pipes/category-list.pipe';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemListComponent,
    MediaItemComponent,
    CategoryListPipe,
    CategoryListComponent,
    FavoriteDirective,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: HttpXhrBackend, useClass: MockXHRBackend }],
  bootstrap: [AppComponent],
})
export class AppModule {}
