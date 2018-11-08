'use strict'
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const target = require('./baseUrl.ts')
console.log('接口地址：', target.baseUrl)
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // 用于嵌套生成的静态资产（js，css，img，fonts）的目录。
    //assetsDir: '',
    // 以多页模式构建应用程序。
    pages: undefined,
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建。
    runtimeCompiler: false,
    // 默认情况下babel-loader忽略其中的所有文件node_modules。
    transpileDependencies: [],
    // 生产环境sourceMap
    productionSourceMap: true,
    // webpack配置
    configureWebpack: () => {
        // if (process.env.NODE_ENV === 'production') {
        //     // 生产环境
        //     config.plugins.push(
        //         new CompressionWebpackPlugin({
        //             asset: '[path].gz[query]',
        //             algorithm: 'gzip',
        //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        //             threshold: 10240,
        //             minRatio: 0.8
        //         })
        //     );

        // } else {
        //     // 开发环境
        // }
    },
    // alias 配置
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))

    },
    // css相关配置
    css: {
     // 启用 CSS modules
     modules: false,
     // 是否使用css分离插件
     extract: true,
     // 开启 CSS source maps?
     sourceMap: false,
     // css预设器配置项
     loaderOptions: {},
    },
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/': {
                // 目标 API 地址
                target: target.baseUrl,
                // 如果要代理 websockets
                https: false,
                hotOnly: false,
                disableHostCheck: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true
            }
        }, // 设置代理
        before: app => {}
    },
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    pluginOptions: { 
     // ...
    }
}