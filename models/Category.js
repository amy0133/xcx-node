/*
 * @Description: 产品种类 数据模型对象【数据结构】
 * @Author: amy
 * @Date: 2019-04-24 15:15:27
 * @LastEditTime: 2019-04-25 10:15:47
 */
// 参考：https://www.cnblogs.com/wuvkcyan/p/9327689.html
const logger = require('../utils/logger')();
const db = require('../utils/db');
const sequelize = db.sequelize;

// 定义表字段
let Category = sequelize.define('category', {
    id: {
        type: sequelize.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    // 分类code
    code: {
        type: sequelize.Sequelize.STRING
    },
    // 分类名称
    name: {
        type: sequelize.Sequelize.STRING
    },
    // 描述
    desc: {
        type: sequelize.Sequelize.STRING
    }
},{
    // 如果为 true 则表的名称和 model 相同，即 category
    // 为 false MySQL 创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false
});

// 创建表
// .sync创建表，并返回一个promise对象
Category.sync({
    force: false,       // 如果已存在表categorys,不进行强制删除重建
}).then(() => {
    logger.info("[Categorys]表创建成功！");
}).catch((error) => {
    logger.info("[Categorys]创建失败：", error);
});

// 创建Category方法集合
class CategoryModel {
    /**
     * @description: 新增category记录
     * @param {category} category对象 
     * @return: true
     */
    static async create(category) {
        let {code, name, desc} = category;
        await Category.create({code, name, desc});
        return true;
    }

    /**
     * @description: 查询所有的category
     * @return: list
     */
    static async findAllCategorys() {
        return await Category.findAll()
    }
}

module.exports = CategoryModel;
 
