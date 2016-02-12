import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import {
	EmailLogo,
	FacebookLogo,
	GithubLogo,
	WhatsappLogo
} from './Logos'

export default class extends Component {
	render() {
		return (
			<div id='footer'>
				<Grid>
					<Row>
						<Col className='left' md={12}>
							<i className='fa fa-copyright'></i> 2016 All Rights Reserved.
							<br />
							Designed and coded with <i className='fa fa-heart'></i> by
							<br />
							<a href='mailto:keisau.ching@pierresaux.me'>
								{`Keisau 'PierreSaux' CHING`}
							</a>
						</Col>
					</Row>
					<Row>
						<Col className='left' md={12}>
							<FacebookLogo />
							<GithubLogo />
							<EmailLogo />
							<WhatsappLogo />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
