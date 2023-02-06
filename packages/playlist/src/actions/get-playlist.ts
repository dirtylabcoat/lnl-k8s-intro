import { Playlist } from '../types';
import { getAllPlaylists, getPlaylistById } from '../utils/mongodb';

export const getPlaylists = async (): Promise<any> => {
  return await getAllPlaylists();
};

export const getPlaylist = async (
  id: number
): Promise<Playlist | undefined> => {
  const result = await getPlaylistById(id);
  return result;
};
