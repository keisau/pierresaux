import webpack from 'webpack'
import path from 'path'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const srcPath = path.resolve(__dirname, 'src')
const jsPath = path.resolve(srcPath, 'js')
const buildPath = path.resolve(__dirname, '..', 'pierresaux.github.io')

import locals from './locals'

export default {
	entry: [
		path.resolve(jsPath, 'index.js')
	],
	output: {
		filename: 'bundle.js',
		libraryTarget: 'umd',
		path: buildPath,
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=static/[hash:8].[ext]&limit=100000&minetype=application/font-woff' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
			{ test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=static/[hash:8].[ext]' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=static/[hash:8].[ext]' },
			{ test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=16384&name=static/images/[hash:8].[ext]' },
			{ test: /\.json$/, loader: 'json' }
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
		new webpack.ProvidePlugin({
        _: "lodash"
    })
	]
}
