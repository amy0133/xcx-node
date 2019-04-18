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
        },
        // elk 日志配置：https://github.com/log4js-node/log4js-node/blob/master/examples/logstashHTTP.js
        logstash: {
            url: 'http://localhost:9200/_bulk',
            type: '@log4js-node/logstash-http',
            // type: 'logstashHTTP',
            logType: 'application',
            logChannel: 'node',
            application: 'logstash-log4js',
            layout: {
                type: 'pattern',
                pattern: '%m'
            }
        }
    },
    categories: {
        // default: { appenders: ['console'], level: 'info' }
        default: { appenders: ['console', 'logstash'], level: 'info' }
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