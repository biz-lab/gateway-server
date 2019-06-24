import { MiddlewareConfig } from '../entity-types/MiddlewareConfig';

export default <MiddlewareConfig>{
  priority: 0,
  name: 'pre-process',
  description: '',
  handler: async (ctx, next) => {
    ctx.state.$$gateway = {
      startTime: process.uptime() * 1000
    };
    console.log(process.uptime());
    await next();
    const endTime = process.uptime() * 1000;
    console.log('总开销', endTime - ctx.state.$$gateway.startTime);
  }
};
