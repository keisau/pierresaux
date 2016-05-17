require('./vendor')

require('file?name=[name].[ext]!../index.html')
require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import { store } from './redux'
import routes from './routes'

window.onunload = () => {}
window.onpageshow = event => {
	if (event.persisted) {
		window.location.reload ()
	}
}

render(
	<Provider store={store}>
		<Router history={browserHistory} >
			{routes}
		</Router>
	</Provider>
	, document.getElementById('mainSection')
)
