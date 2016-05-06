import React from 'react'
import { IndexRoute, Route, Redirect } from 'react-router'

import { About, App, Index, Hobbies, HobbiesIndex, Photography, NotFound } from '../components'

import blog from './blog'

export default (
	<Route path='/' component={App} >
		<IndexRoute component={Index} />
		<Route path='about' component={About} />
		<Route path='hobbies' component={Hobbies} >
			<IndexRoute component={HobbiesIndex} />
			<Route path='photography' component={Photography} />
		</Route>
		{ blog }
		<Route path='404' component={NotFound} />
		<Redirect from='*' to='404' />
	</Route>
)
