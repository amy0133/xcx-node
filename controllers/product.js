/*
 * @Description: 产品相关路由
 * @Author: amy
 * @Date: 2019-04-25 10:52:51
 * @LastEditTime: 2019-04-25 11:24:59
 */
const Product = require('../services/product');

module.exports = (router) => {
    router.get('/findAll', (ctx, next) => {
        return Product.list(ctx);
    });
    router.post('/create', (ctx, next) => {
        return Product.create(ctx);
    })
}
