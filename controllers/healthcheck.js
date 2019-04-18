/*
 * @Description: 健康接口检查
 * @Author: amy
 * @Date: 2019-04-18 10:54:38
 * @LastEditTime: 2019-04-18 10:56:12
 */

 module.exports = (router) => {
     router.get('/', async (ctx, next) => {
         ctx.body = 'pass';
     })
 }
