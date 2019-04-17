/**
 * 日志文件
 */

 const log4js = require('log4js');

//  参考：https://github.com/log4js-node/log4js-node
log4js.configure({
    // 指定日志输出位置
    appenders:{
        // 控制台输出
        console: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['console'], level: 'info' }
    }
})

module.exports = (name) => {
    if(!name){
        // 获取文件名
        let error = (new Error()).stack.toString().split('\n')[2] || '';
        name = (error.match(/[\\\/\(]([-\w\.]+.\w+):\d+:\d+\)$/) || [])[1] || 'unknow';
    }
    return log4js.getLogger(name);
}