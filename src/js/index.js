require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { Router, RouterContext, match } from 'react-router'

import history from './history'
import routes from './routes'


export default (locals, cb) => {
	const location = history.createLocation(locals.path)
	const template = require('ejs!../index.html')

	match({ routes, location }, (err, redirectLocation, renderProps) => {
		cb(err, template({
			text: renderToString(<RouterContext {...renderProps} />)
		}))
	})
}
