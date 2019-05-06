/*
 * @Description: 产品相关路由
 * @Author: amy
 * @Date: 2019-04-25 10:52:51
 * @LastEditTime: 2019-05-06 15:43:16
 */
const Product = require('../services/product');

module.exports = (router) => {
    // 查询所有数据集合
    router.get('/findAll', (ctx, next) => {
        return Product.list(ctx);
    });
    // 新增
    router.post('/create', (ctx, next) => {
        return Product.create(ctx);
    });
    // 查看详情
    router.get('/detail/:id',(ctx, next) => {
        return Product.detail(ctx);
    });

}
