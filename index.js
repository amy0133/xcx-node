/**
 * 入口
 */
const logger = require('./utils/logger')();
logger.info('********* index.js start *********');

global.config = require('./config')(process.env.NODE_ENV);
logger.info('config:', global.config);

const Koa = require('koa');
// 创建实例
const app = new Koa();


app.listen(global.config.port);
logger.info('启动服务，端口号为：', global.config.port);

