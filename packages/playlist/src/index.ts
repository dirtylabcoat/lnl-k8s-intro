import { default as server } from './server';

const port = 8080;

server.listen(port, () => {
  console.info(`Playlist API started on port ${port}`);
});
