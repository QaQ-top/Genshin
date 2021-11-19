import Koa from 'koa';

export async function ProxyRequestHandling(ctx: Koa.ParameterizedContext, fn: () => Promise<any>) {
  ctx.body = await fn();
  ctx.response.status = 200;
}