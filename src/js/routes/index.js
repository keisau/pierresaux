import React from 'react'
import { IndexRoute, Route, Redirect } from 'react-router'

import { About, App, Index, Hobbies, HobbiesIndex, Photography, NotFound } from '../components'

import blog from './blog'

export default {
	path: '/',
	component: App,
	indexRoute: { component: Index },
	childRoutes: [
		{ path: 'about', component: About },
		{
			path: 'hobbies',
			component: Hobbies,
			indexRoute: { component: HobbiesIndex },
			childRoutes: [
				{ path: 'photography', component: Photography}
			]
		},
		blog,
		{ path: '404', component: NotFound },
		{ path: '*', onEnter: ({ params }, replace) => replace('/404')}
	]
}
