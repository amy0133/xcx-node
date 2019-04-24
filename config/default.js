/**
 * 开发环境配置
 */
module.exports = {
    // 默认端口
    port: 3000, 
    // 数据库配置
    database: {
        dialect: 'mysql',           // 数据库类型
        dbname: 'test-node',        // 数据库名称
        uname: 'root',              // 数据库登录名
        upwd: '123456',             // 数据库登录密码
        host: '172.28.3.53',
        port: '3306',               // 端口号
        pool: {                     // 连接池配置
            max: 5,                 // 最大链接量
            min: 0,                 // 最小链接量
            idle: 10000             // 线程10秒内没有被操作就会释放线程
        }
    }
}