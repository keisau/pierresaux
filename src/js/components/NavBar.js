import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {
	render () {
		let key = 0
		const { board } = this.props

		return (
			<div className='navBar'>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href='/'>Kei-sau CHING</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={key} key={key++} href='/about/'>About</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavBar
