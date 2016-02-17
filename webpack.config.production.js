var webpack = require('webpack')
var path = require('path')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var srcPath = path.resolve(__dirname, 'src')
var jsPath = path.resolve(srcPath, 'js')
var distPath = path.resolve(__dirname, 'pierresaux.github.io')

var locals = require('./locals')

module.exports = {
	entry: [
		path.resolve(jsPath, 'index.js')
	],
	output: {
		filename: 'bundle.js',
		libraryTarget: 'umd',
		path: distPath,
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=100000&minetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
			{ test: /\.gif$/, loader: 'url-loader?mimetype=image/png' },
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new StaticSiteGeneratorPlugin('main', locals.path, locals),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
        _: "lodash"
    })
	]
}
