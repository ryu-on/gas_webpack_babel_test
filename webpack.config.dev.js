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

	// �t�@�C���̏o�͐ݒ�
	output: {
		//  �o�̓t�@�C���̃f�B���N�g����
		path: `${__dirname}/dev`,
		// �o�̓t�@�C����
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
			        // enforce: 'pre'���w�肷�邱�Ƃɂ����
				// enforce: 'pre'�����Ă��Ȃ����[�_�[��葁�����������s�����
				// �����babel-loader�ŕϊ�����O�ɃR�[�h�����؂��������߁A�w�肪�K�v
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
