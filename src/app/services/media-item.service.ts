import { catchError, map, throwError } from 'rxjs';
import { MediaItem } from './../models/media-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  getRequest(medium: string) {
    // Here get method will return object which contains property mediaItem of type MediaItem[]
    return this.http
      .get<{ mediaItems: MediaItem[] }>('mediaitems', { params: { medium } })
      .pipe(
        map((response) => {
          return response.mediaItems;
        }),
        catchError(this.errorHandler)
      );
  }

  postRequest(mediaItem: MediaItem) {
    return this.http
      .post('mediaitems', mediaItem)
      .pipe(catchError(this.errorHandler));
  }

  deleteRequest(id: number) {
    return this.http
      .delete(`mediaitems/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  putRequest(id: number, payload: Partial<MediaItem>) {
    const reqBody = {
      id,
      payload: { ...payload },
    };
    return this.http
      .put('mediaitems', reqBody)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
