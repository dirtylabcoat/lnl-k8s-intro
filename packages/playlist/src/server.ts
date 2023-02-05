import Koa from 'koa';
import KoaRouter from 'koa-router';
import cors from 'koa2-cors';
import healthzRoutes from './routes/healthz';
import playlistRoutes from './routes/playlist';

const app = new Koa();

app.use(cors());

const router = new KoaRouter();

router.use('/healthz', healthzRoutes.routes(), healthzRoutes.allowedMethods());

router.use(
  '/playlist',
  playlistRoutes.routes(),
  playlistRoutes.allowedMethods()
);

app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err) => {
  console.error(err, err.message);
});

export default app;
