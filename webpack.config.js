const dev = process.env.NODE_ENV !== 'production';
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
	new MiniCssExtractPlugin({
		filename: 'styles.css',
	}),
	// https://github.com/webpack/changelog-v5/issues/10
	new webpack.ProvidePlugin({
		Buffer: ['buffer', 'Buffer'],
	}),
	...(!dev ? [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			reportFilename: 'webpack-report.html',
			openAnalyzer: false,
		}),
	] : []),
];

module.exports = {
	mode: dev ? 'development' : 'production',
	context: path.join(process.cwd(), 'client'),
	devtool: dev ? 'source-map' : false,
	entry: {
		client: ['./client.jsx'],
	},
	resolve: {
		modules: [
			path.resolve('./client'),
			'node_modules',
		],
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [],
						},
					},
				],
			}, {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
	output: {
		path: path.resolve(process.cwd(), 'dist/client'),
		publicPath: '/public/',
		chunkFilename: '[name].[contenthash].js',
		filename: '[name].bundle.js',
	},
	plugins,
};
