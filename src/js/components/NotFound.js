import React, { Component } from "react"
import { Grid, Row, Col } from 'react-bootstrap'

export default class extends Component {
	render () {
		console.log ('NotFound', this.props)
		return (
			<div id="notFoundContainer">
				<Grid>
					<Row>
						<Col md={12}>
							<i className="fa fa-ban"></i> Page Not Found
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
