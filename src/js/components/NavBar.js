import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap'

export default () => (
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
          <NavItem href='/about' eventKey='1'>About</NavItem>
          <NavItem href='/hobbies' eventKey='2'>Hobbies</NavItem>
          <NavItem href='/blog' eventKey='3'>Blog</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
