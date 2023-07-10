import { catchError, map, throwError } from 'rxjs';
import { MediaItem } from './../models/media-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServerMediaItem } from '../models/server-media-item';
import { MediaItemToServerMediaItem } from '../shared/model-mapping';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  private ROOT_URL: string = 'http://localhost:8080/media-tracker';

  constructor(private http: HttpClient) {}

  getRequest(medium: string) {
    // Here get method will return object which contains property mediaItem of type MediaItem[]
    return this.http
      .get<ServerMediaItem[]>(`${this.ROOT_URL}/mediaitems`)
      .pipe(
        map((response) => {
          console.log("Response: ", response)
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  postRequest(mediaItem: MediaItem) {
    return this.http
      .post(`${this.ROOT_URL}/mediaitems/add`, MediaItemToServerMediaItem(mediaItem))
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
