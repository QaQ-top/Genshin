import KoaRouter from 'koa-router';
import { getPlayerInfo } from '../tools/index';
import { ProxyRequestHandling } from '../index';
import { UID } from '../../../config';

export const router = new KoaRouter();

router.post('/index', async (ctx, next) => {
  await next();
  console.log(ctx.query, ctx.params, ctx.request.body)
  await ProxyRequestHandling(ctx, async () => {
    const result = await getPlayerInfo({ uid: UID.value });
    console.log(result)

    return result;
  })
})
