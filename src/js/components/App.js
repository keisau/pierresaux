require('../../styles/stylesheet.scss')

import React, { Component, PropTypes } from 'react'

import { NavBar, Footer } from '.'

export default ({ children }) => (
	<div id='appContainer'>
		<NavBar />
		<div id='content'>
			{ React.Children.only(children) }
		</div>
		<Footer />
	</div>
)
