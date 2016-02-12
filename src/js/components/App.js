require('../../styles/stylesheet.scss')

import React, { Component, PropTypes } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'

export default class extends Component {
	render() {
		return (
			<div id='appContainer'>
				<NavBar location={this.props.location} />
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
