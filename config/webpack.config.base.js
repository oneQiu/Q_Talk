const Path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DllPlugin = require('webpack/lib/DllPlugin');
const rootPath = Path.resolve(__dirname, '../');

function resolve(path) {
	return Path.resolve(__dirname, path);
}

module.exports = {
	entry: {
		Q_Talk: resolve('../src/index.ts'),
	},
	output: {
		path: resolve('../dist'),
		filename: '[name].[hash].js',
	},
	module: {
		rules: [
			{
				test: '/.(ts|tsx|js|jsx)$/',
				use: 'ts-loader',
			},
			{
				test: '/.(less|css)$/',
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: '/.(jpg|png|gif)$/',
				use: 'file-loader',
			},
		],
	},
	resolve: {
		alias: {
			'@': resolve('../src'),
		},
		extensions: ['.tsx', '.jsx', 'ts', 'js'],
	},
	plugins: [
		// 输出面板
		new DashboardPlugin(),
		// html模板
		new HtmlWebpackPlugin({
			title: 'Q Talk',
			publicPath: resolve('../public/index.html'),
		}),
		// 清空dist
		new CleanWebpackPlugin(),
		// 优化编译
		// new DllPlugin({
		// 	name: '_dll_[name]',
		// 	path: Path.join(rootPath, 'dist/dll', '[name].mainfest.json'),
		// }),
	],
};
