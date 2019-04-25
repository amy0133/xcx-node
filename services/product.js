/*
 * @Description: 产品相关接口
 * @Author: amy
 * @Date: 2019-04-25 10:25:30
 * @LastEditTime: 2019-04-25 16:20:20
 */
const logger = require('../utils/logger')();
const ProductModel = require('../models/Product');

class Product {
    // 查询列表
    static async list(ctx){
        try {
            let data = await ProductModel.findAllProcucts();
            ctx.response.status = 200;
            ctx.body = {
                code: 0,
                msg: '操作成功',
                data
            }
        } catch (error) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: error
            }
        }
    }

    // 新增
    static async create(ctx){
        let params = ctx.request.body;
        
        try {
            let {id} = await ProductModel.create(params);
            ctx.response.status = 200;
            ctx.body = {
                code: 0,
                msg: '操作成功',
                data: id
            }
        } catch (error) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: error
            }
        }
    }
}

module.exports = Product;