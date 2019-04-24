/*
 * @Description: 链接数据库
 * @Author: amy
 * @Date: 2019-04-24 14:28:46
 * @LastEditTime: 2019-04-24 16:44:09
 */
const logger = require('../utils/logger')();
const Sequelize = require('sequelize');
const conf = global.config.database || {}

// 创建Sequelize实例
const sequelize = new Sequelize(conf.dbname, conf.uname, conf.upwd, conf);

// 测试链接状态
sequelize.authenticate().then(() => {
    logger.info('************ 数据库链接成功 ************')
}).catch((error) => {
    logger.info('数据库链接失败：',error);
})

module.exports = {
    sequelize
}