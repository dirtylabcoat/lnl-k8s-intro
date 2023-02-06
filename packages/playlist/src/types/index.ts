import { Document, WithId } from 'mongodb';

export interface Song {
  artist: string;
  title: string;
  length: number;
}

export interface Playlist extends WithId<Document> {
  id: number;
  name: string;
  songs: Song[] | undefined;
}
