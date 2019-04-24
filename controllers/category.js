/*
 * @Description: 产品种类 接口
 * @Author: amy
 * @Date: 2019-04-24 16:09:44
 * @LastEditTime: 2019-04-24 17:01:21
 */
const Category = require('../services/category');

module.exports = (router) => {
    router.get('/findAll',(ctx, next) => {
        return Category.list(ctx);
    })
}