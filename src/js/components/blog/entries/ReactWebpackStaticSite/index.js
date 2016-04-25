import React, { Component } from 'react'

import Template from '../Template'

export default class extends Template {
	getDates() {
		return {
			created: '2016-04-26 00:06:47',
			updated: '2016-04-26 00:06:50',
		}
	}
	getEntry() {
		return (
			<div className=''>
				<h1>React Webpack Static Site</h1>
				<h2>TL;DL</h2>
				The demo code is <a href='https://github.com/pierresaux/react-webpack-static-site-demo'>here</a>. (in fact this site is also a live demo, but far more complicated)
				<h2>Background</h2>
				<p>
					Many have realized the advantage of using a static site over a dynamic site. There is a number of options. Here is one, with the use of React and Webpack.
				</p>
				<p>
					Assuming you are coming from ES6+React+Webpack bootcamp so I don't repeat the basics.
				</p>
				<p>
					The <code>webpack.config.babel.js</code> should look like:
				</p>
				<pre>
					<code className='js'>
						{
`
import webpack from 'webpack'
import path from 'path'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const srcPath = path.resolve(__dirname, 'src')
const jsPath = path.resolve(srcPath, 'js')
const buildPath = path.resolve(__dirname, 'build')

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
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
			{ test: /\.json$/, loader: 'json' }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new StaticSiteGeneratorPlugin('main', locals.path, locals),
	]
}
`
						}
					</code>
				</pre>
				<p>
					And the <code>locals.js</code> should look like
				</p>
				<pre>
					<code className='js'>
						{
`
module.exports = {
	path: [
		'/',
		'/about'
	]
}
`
						}
					</code>
				</pre>
				<p>Here is the magic. The <code>index.js</code> must export a function that matches a route(path) to a rendered HTML string when success, and return a complete <code>index.html</code> via callback. (In my case, I chose ejs to do the template job)</p>
				<pre>
					<code className='js'>
						{
`
export default (locals, cb) => {
	const location = history.createLocation(locals.path)
	const template = require('ejs!../index.html')

	match({ routes, location }, (err, redirectLocation, renderProps) => {
		cb(err, template({
			text: renderToString(<RouterContext {...renderProps} />)
		}))
	})
}
							`
						}
					</code>
				</pre>
				<h2>Summary</h2>
				<p>
					I write this page because all resources I can find is either using obsolete libraries versions or just don't work or some key points are missing. Hope this one can help you :).
				</p>
			</div>
		)
	}
}
