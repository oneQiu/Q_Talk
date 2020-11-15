const BaseWebpack = require('./webpack.config.base');
const { merge } = require('webpack-merge');

module.exports = merge(BaseWebpack, {
	mode: 'development',
	devServer: {
		// host: '', // 指定外部访问的host
		hot: true, // 热重启
		open: true, // 自动浏览器打开
		port: 8111, // 端口
	},
	watch: true,
});
