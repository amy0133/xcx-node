/*
 * @Description: 产品种类 路由
 * @Author: amy
 * @Date: 2019-04-24 16:09:44
 * @LastEditTime: 2019-04-25 10:53:03
 */
const Category = require('../services/category');

module.exports = (router) => {
    router.get('/findAll',(ctx, next) => {
        return Category.list(ctx);
    })
}