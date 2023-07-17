import { ModalPlaceholderDirective } from './../../directives/modal-placeholder.directive';
import { EditModalComponent } from './../edit-modal/edit-modal.component';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MediaItemService } from './../../services/media-item.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MediaItem } from 'src/app/models/media-item';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServerMediaItemToMediaItem } from 'src/app/shared/model-mapping';
import { ServerMediaItem } from 'src/app/models/server-media-item';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  medium: string = '';
  searchControl = new FormControl();
  searchText: string = '';
  closeSubscription!: Subscription;

  @ViewChild(ModalPlaceholderDirective) vc!: ModalPlaceholderDirective;

  constructor(
    private mediaItemService: MediaItemService,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const medium = params.get('medium');
      if (medium) {
        if (medium === 'Movies' || medium === 'Series') {
          this.medium = medium;
        } else {
          this.medium = '';
        }
        this.getMediaItems();
      }
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value: string) => {
        this.searchText = value;
      });
  }

  getMediaItems() {
    this.mediaItemService
      .getRequest(this.medium)
      .subscribe((serverMediaItems: ServerMediaItem[]) => {
        serverMediaItems.forEach(serverMediaItem => {
          this.mediaItems.push(ServerMediaItemToMediaItem(serverMediaItem))  
        });
      });
  }

  onRemoveMediaItem(id: number) {
    this.mediaItemService.deleteRequest(id).subscribe(() => {
      this.mediaItems = this.mediaItems.filter((mediaItem: MediaItem) => mediaItem.id != id);
      // this.getMediaItems();
    });
  }

  onToggleFavorite(mediaItem: MediaItem) {
    this.mediaItemService
      .putRequest(mediaItem)
      .subscribe(() => {
        this.getMediaItems();
      });
  }

  onEditMediaItem(mediaItem: MediaItem) {
    this.vc.viewContainerRef.clear();
    const editModalComponentRef =
      this.vc.viewContainerRef.createComponent(EditModalComponent);
    editModalComponentRef.instance.mediaItem = mediaItem;
    this.closeSubscription = editModalComponentRef.instance.close.subscribe(
      () => {
        this.getMediaItems();
        this.closeSubscription.unsubscribe();
        this.vc.viewContainerRef.clear();
      }
    );
  }
}
