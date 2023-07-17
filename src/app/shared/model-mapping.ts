import { ServerMediaItem } from './../models/server-media-item';
import { MediaItem } from './../models/media-item';

export function MediaItemToServerMediaItem(mediaItem: MediaItem): ServerMediaItem {
    let serverMediaItem: ServerMediaItem = {
        id: mediaItem.id,
        name: mediaItem.name,
        genre: mediaItem.category,
        category: mediaItem.medium,
        watchedOn: mediaItem.watchedOn,
        releaseYear: mediaItem.year,
        favorite: mediaItem.isFavorite,
    };
    
    return serverMediaItem;
}

export function ServerMediaItemToMediaItem(serverMediaItem: ServerMediaItem): MediaItem {
    let mediaItem: MediaItem = {
        id: serverMediaItem.id,
        name: serverMediaItem.name,
        medium: serverMediaItem.category,
        category: serverMediaItem.genre,
        watchedOn: serverMediaItem.watchedOn,
        year: serverMediaItem.releaseYear,
        isFavorite: serverMediaItem.favorite,
    };

    return mediaItem;
}