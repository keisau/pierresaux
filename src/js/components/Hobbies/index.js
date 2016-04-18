import React, { Component } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem, Image, Tooltip, OverlayTrigger } from 'react-bootstrap'

const images = [
	{
		link: '/hobbies/photography',
		tooltip: (<Tooltip id='hobbiesPhotography'>Photography</Tooltip>),
		src: require('../../../images/hobbies/1.jpg')
	}
]
const IMAGE_PER_ROW = 3

export class Hobbies extends Component {
	render() {
		return (
			<div id='hobbies' >
				{ React.Children.only(this.props.children) }
			</div>
		)
	}
}

export class HobbiesIndex extends Component {
	renderImages() {
		let retval = []
		for (let i in images) {
			if (i % IMAGE_PER_ROW === 0) {
				let columns = []
				for (let j = 0; j < IMAGE_PER_ROW; j++) {
					if (i + j >= images.length) {
						break
					}

					const index = parseInt(i) + parseInt(j)
					const { link, src, tooltip } = images[index]
					columns.push(
						<OverlayTrigger key={index} placement='top' overlay={tooltip} >
							<Col lg={4} md={4} sm={4} >
								<a href={link} ><Image src={src} thumbnail /></a>
							</Col>
						</OverlayTrigger>
					)
				}

				retval.push(<Row key={i / IMAGE_PER_ROW}> { columns } </Row>)
			} else {
				continue
			}
		}
		return retval
	}
	render() {
		return (
			<Grid id='hobbiesMenu'>
				{ this.renderImages() }
			</Grid>
		)
	}
}

export { Photography } from './Photography'
