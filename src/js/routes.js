import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { About, App, Index, Hobbies, HobbiesIndex, Photography } from './components'

export default (
	<Route path='/' component={App} >
		<IndexRoute component={Index} />
		<Route path='about' component={About} />
		<Route path='hobbies' component={Hobbies} >
			<IndexRoute component={HobbiesIndex} />
			<Route path='photography' component={Photography} />
		</Route>
	</Route>
)
