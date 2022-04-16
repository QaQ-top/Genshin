import KoaRouter from 'koa-router';
import { ProxyRequestHandling } from '../../utils/index';
export const router = new KoaRouter();

router.post('/index', async (ctx, next) => {
  await next();
  console.log(ctx.query, ctx.params, ctx.request.body)
  await ProxyRequestHandling(ctx, async () => {
    
    return '';
  })
})
