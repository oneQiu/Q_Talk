const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const BaseWebpack = require('./webpack.config.base');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifycssWebpack = require('purifycss-webpack');
const glob = require('glob');
const Path = require('path');

module.exports = merge(BaseWebpack, {
	plugins: [
		// 压缩JS
		new UglifyjsWebpackPlugin(),
		// 压缩CSS PS：单入口就不需要这个了
		new MiniCssExtractPlugin(),
		// 去除无用CSS
		new PurifycssWebpack({
			paths: glob.sync(Path.resolve('../public/index.html')),
		}),
		// 生成代码分析报告
		new BundleAnalyzerPlugin({
			analyzerMode: (() =>
				process.env.npm_lifecycle_event === 'analyzer'
					? 'static'
					: 'disabled')(),
		}),
	],
});
