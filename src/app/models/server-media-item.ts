export interface ServerMediaItem {
    readonly id: number;
    name: string;
    genre: string;
    category: string;
    watchedOn: number | null;
    releaseYear: number | null;
    favorite: boolean;
}

/**
 * This model is used to map certains properties of MediaItem modal with MediaItem model 
 * used at server side 
 * MediaItem -> ServerMediaItem
 * id -> id
 * name -> name
 * medium -> category
 * category -> genre
 * year -> releaseYear
 * isFavorite -> favorite
 */