export type Song = {
  artist: string;
  title: string;
  length: number;
};

export type Playlist = {
  id: number;
  name: string;
  songs: Song[] | undefined;
};
