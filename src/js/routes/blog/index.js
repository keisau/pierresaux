import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { Blog, BlogIndex } from '../../components/Blog'

export default {
	path: 'blog',
	component: Blog,
	indexRoute: { component: BlogIndex },

	// TODO: get routes from API endpoint
	getChildRoutes(location, cb) {
		cb(null, [])
	},
}
