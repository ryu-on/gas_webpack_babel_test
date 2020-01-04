const GasPlugin = require('gas-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		index: path.resolve(__dirname, "./src/index.js"),
		main: path.resolve(__dirname, "./src/html/main.html")
    	},

	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/dev`,
		// 出力ファイル名
		filename: "[name].bundle.js"
	},
	module:{
		rules:[
			{
				test: /\,html$/,
				loader: "html-loader",
				exclude: /node_modules/
			},
//			{
			        // enforce: 'pre'を指定することによって
				// enforce: 'pre'がついていないローダーより早く処理が実行される
				// 今回はbabel-loaderで変換する前にコードを検証したいため、指定が必要
       				// enforce: 'pre',
       				// test: /\.js$/,
       				// exclude: /node_modules/,
       				// loader: 'eslint-loader'
//			},
		//	{
		//		test: /\.js$/,
		//		exclude: /node_modules/,
		//		use:{
		//			loader: 'babel-loader',
		//			options:{
		//				presets:[['@babel/preset-env'],{
		//
		//					targets: { ie: '8'},
		//					useBuiltIns: 'usage',
		//					corejs: 3,
		//					modules: false}],
		//				plugins:[['@babel/plugin-transform-runtime',
		//					{corejs: 3,
		//					version: "7.7.7"}]]
		//			}
		//		}]
		//	}
		]
	},
	plugins: [
		new GasPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/html/main.html"
		})
	]
};
