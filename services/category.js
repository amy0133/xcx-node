/*
 * @Description: 方法集合
 * @Author: amy
 * @Date: 2019-04-24 16:09:27
 * @LastEditTime: 2019-04-25 15:28:23
 */
const logger = require('../utils/logger')();
const CategoryModel = require('../models/Category');

class Category {

    /**
     * 查询列表
     */
    static async list(ctx){
        try {
            let data = await CategoryModel.findAllCategorys();
            ctx.response.status = 200;
            ctx.body = {
                code: 0,
                msg: '操作成功',
                data
            }
            logger.info("categoryList:", data);
        } catch (error) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: error
            }
        }
    }

}

module.exports = Category