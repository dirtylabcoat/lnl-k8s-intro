import { playlists } from '../playlists';
import { Playlist } from '../types';

export const getPlaylists = (): Playlist[] => {
  return playlists;
};

export const getPlaylist = (id: number): Playlist | undefined => {
  return playlists.find((p) => p.id === id);
};
