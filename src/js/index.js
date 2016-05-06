require('./vendor')

require('file?name=[name].[ext]!../index.html')
require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

window.onunload = () => {}
window.onpageshow = event => {
	if (event.persisted) {
		window.location.reload ()
	}
}
render(
	<Router history={browserHistory} >
	{routes}
	</Router>
	, document.getElementById('mainSection')
)
