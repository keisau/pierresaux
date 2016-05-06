import React, { Component } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'

const interestedAreas = [
	{ name: 'Web Frontend Development' },
	{ name: 'Backend Development' },
	{ name: 'Cloud Architectures' },
	{ name: 'Software Development Methodologies' },
	{ name: 'Development Environment & Tools' },
	{ name: 'Linux and OS X internals (kernel)' },
	{ name: 'Graph Theory and Algorithms' },
	{ name: 'Number Theory and Algorithms' },
	{ name: 'Cryptography and Security Protocols' }
]
const focusedAreas = [
	{ name: 'Web Frontend Development' },
	{ name: 'Backend Development' },
	{ name: 'Cloud Architectures' },
	{ name: 'Software Development Methodologies' },
	{ name: 'Development Environment & Tools' },
]
export default () => (
	<Grid id='about'>
		<Row>
			<Col xs={8} md={5} lg={4} xsOffset={2} mdOffset={2} lgOffset={2}>
				<i className="fa fa-smile-o"></i> Hello!
				<p>I am a software geek. I have a number of interested areas:</p>
				<ol>
					{
						interestedAreas.map ((area, index) => {
							return <li key={index}>{area.name}</li>
						})
					}
				</ol>
				<p>For my hobbies, please visit the Hobbies page :) (which is under construction)</p>
				<p>For contact methods, please consult the footer below </p>
			</Col>
		</Row>
	</Grid>
)
