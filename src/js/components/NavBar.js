import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap'

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
							<NavItem eventKey='1' href='/about/'>About</NavItem>
							<NavItem eventKey='2' href='/hobbies/'>Hobbies</NavItem>
							<NavItem eventKey='3' href='/blog/'>Blog</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavBar
