import React, { Component } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem, Image, Tooltip, OverlayTrigger } from 'react-bootstrap'

import ReactWebpackStaticSite from './Entries/ReactWebpackStaticSite'

export class Blog extends Component {
	render() {
		return (
			<div id='blog' >
				{ React.Children.only(this.props.children) }
			</div>
		)
	}
}
const entries = [
	ReactWebpackStaticSite
]
export class BlogIndex extends Component {
	renderEntryPreviews() {
		return entries.map((Entry, i) =>
			<Row key={`blogEntry[${i}]`}>
				<Entry/>
			</Row>
		)
	}
	render() {
		const rows = this.renderEntryPreviews()
		return (
			<Grid id='blogIndex'>
				{ rows }
			</Grid>
		)
	}
}
