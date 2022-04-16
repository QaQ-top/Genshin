import Koa from 'koa';

/**
 * @description 处理响应数据
 * @param fn {Promise<any>} 一个异步函数，该函数执行的结果会返回给客户端
 */
export async function ProxyRequestHandling(ctx: Koa.ParameterizedContext, fn: () => Promise<any>) {
  ctx.body = await fn();
  ctx.response.status = 200;
}