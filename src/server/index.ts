import Koa from 'koa';
import { router } from './http/routes'
import bodyParser from 'koa-bodyparser'

import { UID } from '../config';

const server = new Koa();

server.use(bodyParser());

server.use(async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.set('Access-Control-Allow-Headers', 'Content-Type');
  ctx.response.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.response.set('Access-Control-Max-Age', '36000');
  ctx.response.set('Content-Type', 'application/json');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});

server.use(router.routes());

export default server