import { ParameterizedContext } from 'koa';
import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/', (ctx: ParameterizedContext) => {
  ctx.status = 200;
  ctx.body = 'OK';
});

export default router;
