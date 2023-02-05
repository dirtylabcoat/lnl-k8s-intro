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
  ctx.status = 200;
  ctx.body = getPlaylist(Number(id));
});

export default router;
