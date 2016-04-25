import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { Blog, BlogIndex } from '../../components/Blog'

export default (
	<Route path='blog' component={Blog} >
		<IndexRoute component={BlogIndex} />
	</Route>
)
