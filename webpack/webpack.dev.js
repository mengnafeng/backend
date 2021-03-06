const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {                //启用开发服务器
    compress: true,          //一切服务都启用gzip 压缩
    port: '3000',            //指定端口号，如省略，默认为”8080“
    hot: true,               //启用模块热替换特性
    inline: true,            //启用内联模式，一段处理实时重载的脚本被插入到bundle中，并且构建消息会出现在浏览器控制台
    historyApiFallback: true,//开发单页应用时有用，依赖于HTML5 history API，设为true时所有跳转将指向index.html
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),  //webpack内置的热更新插件
  ],
  mode: 'development'
});