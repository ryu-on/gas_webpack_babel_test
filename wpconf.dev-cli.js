const HtmlWebpackPlugin= require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		index: path.resolve(__dirname, "./src/html/home\.html"),
//		login: path.resolve(__dirname, "./src/js/login.js"),
    	},

	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/dev`,
		// 出力ファイル名
		filename: "home.html"
	},
	module:{
		rules:[
			{
				test: /home\.html$/,
				loader: "html-loader",
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:{
				    loader: 'babel-loader',
       				options: {
          					presets: [
							[
								'@babel/preset-env',
								{
									"targets": {"ie": 8},
									"useBuiltIns": "entry",
									"corejs": 3
								},
								"babel-preset-react"
							]
						],
						plugins: [
							["@babel/plugin-transform-runtime",
								{
        							"corejs": 3,
        							"version": "7.7.7"
								}
							],
						],
        			}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};
