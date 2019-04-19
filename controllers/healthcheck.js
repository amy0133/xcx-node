/*
 * @Description: 健康接口检查
 * @Author: amy
 * @Date: 2019-04-18 10:54:38
 * @LastEditTime: 2019-04-19 14:38:12
 */

 const logger = require('../utils/logger')();

 module.exports = (router) => {
    //  测试
    //  curl http://localhost:3000/healthcheck
     router.get('/', async (ctx, next) => {
         ctx.body = 'hello world';
         logger.info('*************** 接口正常 ******************')
     });
 }
