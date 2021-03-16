### 介绍

本项目是使用 koa 框架搭建的一个轻量级 web api 框架，可以快速构建项目

### 使用组件

-   `koa+koa-bodyparser+koa-router` 实现路由、以及接受 request body
-   `continuation-local-storage` 实现线程内多文件数据共享，此项目用于日志中记录 requestId
-   `dotenv` 使用.env,.env.local 文件进行配置管理，方便本地开发时进行本地配置，代码中的.env.example,.env.local.example 为例子文件，直接去掉后缀.example 即可使用。先加载.env 文件，如果存在.env.local 文件，则.env.local 文件的优先级大于.env 文件
-   `ioredis`进行 redis 操作，支持 async、await 特性，告别 callback 函数
-   `sequelize` 进行数据库操作，对应代码 models 目录中的文件
-   `sequelize-cli` 进行数据库生成迁移文件&执行迁移
-   `uuid` 生成唯一 id 作为 requestId 的库
-   `winston&winston-daily-rotate-file` 这是记录日志的组件
-   `pm2` 上线部署的组
-   `prettier` 美化代码
-   `eslint` 代码规范化检查&修复代码
-   `husky&lint-staged` husky 是一个 git 钩子库，lint-staged 是一个可以对暂存区文件进行 lint 检测的组件，二者结合可以在 git commit 时对**要提交的代码**进行规范话检查，避免对项目所有文件进行检查
-   `nodemon` 本地开发运行服务的组件库，修改代码服务会进行实时热更新，不需要重启服务，大大提高了开发效率
-   `sequelize-auto` 根据数据库表结构生成 models 目录中表 model 的工具，这样达到了不需要手动修改 model 文件，自动生成表 model，避免了同时手动维护 migration 迁移文件&model 文件两个文件的困扰

### 目录结构

-   `config` 配置文件目录，包括 app、redis、database 的配置
-   `controller` 控制器目录
-   `core` 核心库目录，包括 log、redis、db、自动生成模型等的封装代码，开发过程中一般不需要改动
-   `logs` 日志目录，生成的 request、以及业务层目录都在这里，日志按天生成文件
-   `middleware` 中间件目录，所有的中间件都可以在这里写，在 middleware/index.js 文件里面进行中间件的 use
-   `migrations` 生成的 db 迁移文件存放目录
-   `models` 表模型目录，一个表对应一个 model 文件
-   `router` 路由定义目录
-   `seeders` 表生成种子数据目录
-   `service` 服务层目录，介于 controller&model 层中间的一层，也就是业务层
-   `util` 工具函数目录

### 命令说明

```shell
npm run migration create_table user //生成迁移文件，文件生成到migrations目录
npm run migrate //执行没有之前过的迁移
npm run generate:model //根据数据库中表结构生成每个表的model，文件生成到models目录
npm run prettier //没有项目所有.js文件代码
npm start //node启动服务
npm run pm2 //pm2方式启动服务
npm stop //pm2停止服务
npm run reload //pm2 reload服务
npm restart //pm2 重启服务
npm run dev //nodemon 启动服务，开发时使用，代码会进行实时热更新
npm run test //对暂存区文件进行eslint检查&prettier美化
npm run lint //对项目所有js文件进行规范化检查
```
