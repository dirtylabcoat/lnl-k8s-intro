import { ParameterizedContext } from 'koa';
import KoaRouter from 'koa-router';
import { getPlaylist, getPlaylists } from '../../actions/get-playlist';

const router = new KoaRouter();

router.get('/', (ctx: ParameterizedContext) => {
  ctx.status = 200;
  ctx.body = getPlaylists();
});

router.get('/:id', (ctx: ParameterizedContext) => {
  const { id } = ctx.params;
  const playlist = getPlaylist(Number(id));
  if (playlist) {
    ctx.status = 200;
    ctx.body = playlist;
  } else {
    ctx.status = 404;
    ctx.body = { message: 'Playlist not found' };
  }
});

export default router;
