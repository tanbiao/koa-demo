### 介绍

本项目是使用koa框架搭建的一个轻量级web api框架，可以快速构建项目

### 使用组件

- `koa+koa-bodyparser+koa-router` 实现路由、以及接受request body
- `continuation-local-storage` 实现线程内多文件数据共享，此项目用于日志中记录requestId
- `dotenv` 使用.env,.env.local文件进行配置管理，方便本地开发时进行本地配置，代码中的.env.example,.env.local.example为例子文件，直接去掉后缀.example即可使用。先加载.env文件，如果存在.env.local文件，则.env.local文件的优先级大于.env文件
- `ioredis`进行redis操作的组件库，支持async、await特性，告别callback函数
- `sequelize` 进行数据库操作的组件库，对应代码models目录中的文件
- `sequelize-cli` 进行数据库生成迁移文件&执行迁移的组件库
- `uuid` 生成唯一id作为requestId的库
- `winston&winston-daily-rotate-file` 记录日志的组件库
- `pm2` 上线部署的组件库
- `prettier` 美化代码的组件
- `nodemon` 本地开发运行服务的组件库，修改代码服务会进行实时热更新，不需要重启服务，大大提高了开发效率
- `sequelize-auto` 根据数据库表结构生成models目录中表model的工具，这样达到了不需要手动修改model文件，自动生成表model，避免了同时手动维护migration迁移文件&model文件两个文件的困扰

### 目录结构

- `config` 配置文件目录，包括app、redis、database的配置
- `controller` 控制器目录
- `core` 核心库目录，包括log、redis、db、自动生成模型等的封装代码，开发过程中一般不需要改动
- `logs` 日志目录，生成的request、以及业务层目录都在这里，日志按天生成文件
- `middleware` 中间件目录，所有的中间件都可以在这里写，在middleware/index.js文件里面进行中间件的use
- `migrations` 生成的db迁移文件存放目录
- `models` 表模型目录，一个表对应一个model文件
- `router` 路由定义目录
- `seeders` 表生成种子数据目录
- `service` 服务层目录，介于controller&model层中间的一层，也就是业务层
- `util` 工具函数目录

### 命令说明

```shell
npm run migration create_table user //生成迁移文件，文件生成到migrations目录
npm run migrate //执行没有之前过的迁移
npm run auto:model //根据数据库中表结构生成每个表的model，文件生成到models目录
npm run prettier //没有项目所有.js文件代码
npm start //node启动服务
npm run pm2 //pm2方式启动服务
npm stop //pm2停止服务
npm run reload //pm2 reload服务
npm restart //pm2 重启服务
npm run dev //nodemon 启动服务，开发时使用，代码会进行实时热更新
```

