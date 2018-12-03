# Taro开发脚手架

这个项目使用 Taro 构建了一个示例小程序。主要目的在于展示如何使用 TypeScript 构建 Taro 项目和使用 Taro 内置的组件以及处理 React 生命周期、事件、组件复用等基本操作。

## 技术栈

- [TypeScript](https://www.tslang.cn/docs/home.html)（TypeScript 是 JavaScript 的子集，提供了强类型等帮助早期发现错误的功能）
- [React](https://reactjs.org/) / [Taro](https://taro.aotu.io/)（Taro 是基于 React 二次开发的框架，语法与 React 无限接近）
- [dva](https://dvajs.com/)（dva 是基于 redux 开发的状态管理框架）
- [Less](https://less.bootcss.com/)

## 文件架构

- Documents文件夹下是“开发规范”，里面涉及了一些强制要求的代码书写规范和在Taro使用中因为受限于微信小程序功能而需要注意的地方。
- Sources文件夹下是一个开箱即用的 Taro 示例框架，接下来的“运行”说明和命令均在此文件夹下进行。

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
    └── tsconfig.json               // TypeScript配置文件

## 如何运行

首先需要安装npm或[yarn](https://yarnpkg.com/zh-Hans/)，推荐使用yarn

使用 npm 或 yarn 全局安装 taro

```
$ npm install -g @tarojs/cli
或
$ yarn global add @tarojs/cli
```

同步项目到本地

```
$ git clone http://tyx.petswear.cn:3000/TyxDev/FrontEnd.Demo.git
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

如果以上操作都没有问题，那么 Taro 将会在 dist 文件夹下输出编译好的微信小程序源代码，使用微信开发者工具定位到 dist 目录下进行预览即可，所有改动所见即所得。