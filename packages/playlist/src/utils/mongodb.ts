import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { Playlist } from '../types';

dotenv.config();

export const getPlaylistById = async (id: number) => {
  console.log(`getPlaylistById ${id}`);
  const mongoDbClient = new MongoClient(process.env.MONGODB_URL as string);
  const result = (await mongoDbClient
    .db(process.env.MONGODB_DBNAME)
    .collection(process.env.MONGODB_COLLECTION as string)
    .findOne({ id })) as Playlist;
  await mongoDbClient.close();
  return result;
};

export const getAllPlaylists = async () => {
  console.log('getAllPlaylists');
  const mongoDbClient = new MongoClient(process.env.MONGODB_URL as string);
  const cursor = mongoDbClient
    .db(process.env.MONGODB_DBNAME)
    .collection(process.env.MONGODB_COLLECTION as string)
    .find({});
  const results = (await cursor.toArray()) as Playlist[];
  await mongoDbClient.close();
  return results;
};
