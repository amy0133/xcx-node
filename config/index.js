/**
 * 获取配置信息
 */

module.exports = (env) => {
    let conf = Object.assign(
        require('./default'),
        (() => {
            try {
                return require(`./${env}`)
            } catch (error) {
                console.log(error)
            }
        })()
    )

    // 环境变量可以手动注入
    if(process.env.PORT){
        conf.port = process.env.PORT
    }
    return conf
}