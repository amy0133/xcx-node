/*
 * @Description: 产品
 * @Author: amy
 * @Date: 2019-04-25 10:09:09
 * @LastEditTime: 2019-05-06 15:51:19
 */
const logger = require('../utils/logger')();
const db = require('../utils/db');
const sequelize = db.sequelize;

const Product = sequelize.define('products', {
    id: {
        type: sequelize.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    // 名称
    name: {
        type: sequelize.Sequelize.STRING
    },
    // logo地址
    logo: {
        type: sequelize.Sequelize.STRING
    },
    // 作者
    author: {
        type: sequelize.Sequelize.STRING
    },
    // 发布时间
    releaseTime: {
        type: sequelize.Sequelize.STRING
    },
    // 订阅数量
    starNum: {
        type: sequelize.Sequelize.INTEGER
    },
    // 类型code
    categoryCode: {
        type: sequelize.Sequelize.INTEGER
    },
    // 描述
    desc: {
        type: sequelize.Sequelize.STRING
    }
},{
    // 如果为 true 则表的名称和 model 相同，即 product
    // 为 false MySQL 创建的表名称会是复数 products
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false
});

// 创建表
// .sync创建表，并返回一个promise对象
Product.sync({
    force: false,       // 如果已存在表products,不进行强制删除重建
}).then(() => {
    logger.info("[Products]表创建成功！");
}).catch((error) => {
    logger.info("[Products]创建失败：", error);
});

// 产品相关方法集合
class ProductModel {

    /**
     * @description: 新增一条产品
     * @param {product} 产品对象 
     * @return: true
     */
    static async create(product){
        await Product.create(product);
        return true;
    }  

    /**
     * @description: 查询全部list
     * @return: list
     */
    static async findAllProcucts(){
        return await Product.findAll();
    }

    /**
     * @description: 根据id获取产品详情
     * @param {number} id
     * @return: DTO<Product>
     */
    static async findProductById(id){
        return await Product.findOne({
            where: {
                id
            }
        })
    }
}

module.exports = ProductModel;