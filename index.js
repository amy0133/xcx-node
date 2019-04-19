/**
 * 入口
 */
const logger = require('./utils/logger')();
logger.info('********* index.js start *********');

global.config = require('./config')(process.env.NODE_ENV);
logger.info('config-evn:', process.env.NODE_ENV);

const Koa = require('koa');
// 创建实例
const app = new Koa();

// 封装routers
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
((root = './controllers') => {
    // 读取[root]目录下所有js文件
    fs.readdirSync(root).forEach((filename) => {
        let file = path.parse(filename);
        logger.info('load router (controllers): ' + filename);
        if(file.ext.toLowerCase() !== '.js') return;
        const router = new Router({prefix: `/${file.name}`});
        require(`${root}/${file.name}`)(router);
        app.use(router.routes());
    })
})()

app.listen(global.config.port);
logger.info('********* 启动服务，端口号为：', global.config.port + ' *********');

