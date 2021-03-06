# Taro开发脚手架

这个项目使用 Taro 构建了一个示例小程序。主要目的在于展示如何使用 TypeScript 构建 Taro 项目和使用 Taro 内置的组件以及处理 Taro 生命周期、事件、组件复用等基本操作。

## 技术栈

- [TypeScript](https://www.tslang.cn/docs/home.html)
- [React](https://reactjs.org/) / [Taro](https://taro.aotu.io/)
- [dva](https://dvajs.com/)
- [Less](https://less.bootcss.com/)

## 文件架构

- Documents 文件夹下是“开发规范”，里面涉及了一些强制要求的代码书写规范和在 Taro 使用中因为受限于微信小程序功能而需要注意的地方。
- Sources 文件夹下是一个开箱即用的 Taro 示例框架，接下来的“运行”说明和命令均在此文件夹下进行。

### 源代码目录结构

    ├── dist                        // 小程序编译结果目录
    ├── config                      // Taro配置目录
    │   ├── dev.js                  // 开发时配置
    │   ├── index.js                // 默认配置
    │   └── prod.js                 // 打包时配置
    ├── src                         // 源码目录
    │   ├── Components              // 组件
    │   ├── Models                  // redux models
    │   ├── Views                   // 页面文件目录
    │   │   └── Index
    │   │       ├── Index.tsx       // 页面逻辑
    │   │       ├── Index.less      // 页面样式
    │   │       ├── Model.ts        // 页面models
    │   │       └── Services.ts     // 页面api
    │   ├── Utils                   // 常用工具类
    │   ├── Entities                // TypeScript实体类
    │   ├── Vender                  // 静态文件
    │   ├── app.tsx                 // 入口文件
    │   ├── app.less                // 全局样式文件
    │   ├── config.js               // 项目配置文件
    │   └── index.html
    ├── package.json                // 项目信息和依赖
    ├── GenerateTemplate.js         // 页面模块生成器
    └── tsconfig.json               // TypeScript配置文件

## 如何运行

首先需要安装 npm 或 [yarn](https://yarnpkg.com/zh-Hans/)，推荐使用 yarn

使用 npm 或 yarn 全局安装 taro

```
$ npm install -g @tarojs/cli
或
$ yarn global add @tarojs/cli
```

同步项目到本地

```
$ git clone https://github.com/Tuisku-L/TaroDva.Demo.git
```

进入代码文件夹

```
$ cd Sources
```

安装项目依赖

```
$ npm install
或
$ yarn
```

安装完成后，使用微信小程序方式预览项目

```
$ npm run dev:weapp
或
$ yarn run dev:weapp
```

## 添加新页面或新组件

使用tpl命令即可一键生成页面或组件的框架，命令使用方式如下：

> tpl [moduleName] [generateType(c | p)] [rootDir]

例如：

- 添加一个购物车页面

```
$ yarn run tpl Cart p
或
$ npm run tpl Cart p
```

- 添加一个商品列表项组件

```
$ yarn run tpl GoodsListItem c
或
$ npm run tpl GoodsListItem c
```

- 添加一个订单大分类的页面“提交订单”页面（/Views/Order/SubmitOrder）

> 命令最后一个参数的目的是将页面进行分类，而无需在 Views 文件夹中新建过多的文件夹造成混乱。比如“`提交订单（SubmitOrder）`”和“`确认订单（ConfirmOrder）`”都属于“`订单（Order）`”分类，我们在 Views 中就会新建 一个Order 文件夹，将这两个页面放置于此文件夹（ `/Views/Order/SubmitOrder` 和 `/Views/Order/ConfirmOrder` ），由此使项目结构更合理也更易于代码阅读和维护。

```
$ yarn run tpl SubmitOrder p Order
或
$ npm run tpl SubmitOrder p Order
```

命令执行完毕后，将会在对应文件夹下生成相关文件。

- 页面生成在 `./src/Views` 文件夹下，包括页面文件、Model 文件、Service 文件和 less 样式表文件。同时，还会在 `./src/Models/Index.tsx` 中自动添加此页面的 Model 文件导出项。

- 组件生成在 `./src/Components` 文件夹下，包括组件文件和 less 样式表文件。

最后，如果你生成的是页面文件，请到 `./src/app.tsx` 文件的“pages”配置项中添加这个页面，否则这个页面将不会被添加到路由中。

---

如果以上操作都没有问题，那么 Taro 将会在 dist 文件夹下输出编译好的微信小程序源代码，使用微信开发者工具定位到 dist 目录下进行预览即可，所有改动所见即所得。
