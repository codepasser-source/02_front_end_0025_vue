# vue2

# 环境篇

## 安装开发环境

- 安装nodejs

>
    https://nodejs.org/en/

- 全局安装

>
    sudo npm install -g typescript
    sudo npm install -g vue
    sudo npm install -g vue-cli

>
    # 选择淘宝npm库: --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g typescript --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g vue --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g vue-cli --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist

- 卸载 vue cli

>
    # 目录 /usr/local/lib/node_modules
    sudo npm uninstall -g typescript
    sudo npm uninstall -g vue
    sudo npm uninstall -g vue-cli
    sudo npm cache clean

- 创建项目

>
    vue init webpack vue2
    # install dependencies and go!
    cd vue2
    npm run dev
    
- 引入scss load

> npm install --save-dev

    npm install --save-dev sass-loader node-sass
    npm install --save-dev vuex

- 引入bootstrap 4 & bootstrap scss

> npm install --save-dev

    # https://bootstrap-vue.js.org/docs/
    npm install --save-dev jquery@1.9.1
    npm install --save-dev bootstrap-vue
    npm install --save-dev sass-resources-loader

> 修改 build/utils.js

    scss: generateLoaders('sass').concat(
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../src/style/_variables.scss')
          }
        }
    ),

- 引入perfect-scrollbar

> npm install --save-dev

    # https://www.npmjs.com/package/perfect-scrollbar
    npm install --save-dev perfect-scrollbar
    
> 应用

    # 引入
    import PerfectScrollbar from 'perfect-scrollbar';
    # 使用
    const sidebarContainer = this.$refs.sidebarContainer;
    const ps = new PerfectScrollbar(sidebarContainer);

- TODO

> page

    Login
    401
    404

> core

    Router
    Extends JS
    Permissions

> framework

    Store
    API
    Request JS (Axios)
    Mock JS
    Components
    Filter
    Directive
    
> util

    I18n
    Validate
    ICON
    


# A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
