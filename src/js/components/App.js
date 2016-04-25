require('../../styles/stylesheet.scss')

import React, { Component, PropTypes } from 'react'
import hljs from 'highlight.js'

import { NavBar, Header, Footer } from '.'

export default class extends Component {
	componentDidMount() {
		hljs.configure({
			tabReplace: '  '
		})
		hljs.initHighlighting()
	}
	render() {
		return (
			<div id='appContainer'>
				<NavBar location={this.props.location} />
				<Header />
				<div id='content'>
					{ React.Children.only(this.props.children) }
				</div>
				<Footer />
			</div>
		)
	}
}
