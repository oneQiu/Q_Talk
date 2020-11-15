const DevWebpack = require('./webpack.config.dev');
const ProdWebpack = require('./webpack.config.prod');

module.exports = () => {
	const env = process.env.NODE_ENV;
	console.log('当前环境：', env);
	if (env === 'production') {
		return ProdWebpack;
	}
	return DevWebpack;
};
