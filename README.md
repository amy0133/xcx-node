## 使用技术
nodejs + koa2 + mysql

## 配置
+ ./config

## npm包介绍
- koa 框架
- koa-bodyparser 表单解析中间件：解析请求体
- koa-compress 压缩数据中间件：gzip 提高传输速度
- koa-conditional-get 配合koa-etag实现基于etag的缓存
- koa-etag 设置etag[缓存],若etag未变化，则返回304
- koa-router 路由中间件：get/post...
- log4js 日志管理
- mysql 数据库


### elk
+ 安装：docker pull sebp/elk
    ```
    docker + elk 收集日志并使用kibana查看日志（http://localhost:5601/）
    ```
+ 启动 (--name elk 可选)
    ```bash
    docker run -it \
    -p 5601:5601 \
    -p 9200:9200 \
    -p 5044:5044 \
    --name elk sebp/elk
    ```
## 功能
+ 产品类型，测试一个接口:curl http://localhost:3000/category/findAll

## 待完成项
+ 测试用例
+ 部署



