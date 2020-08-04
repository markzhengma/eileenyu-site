import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" fixed="top">
        <Navbar.Brand href="/">
          Eileen Yu
        </Navbar.Brand>
        <Navbar.Collapse id="nav-bar">
          <Nav>
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/program/1">
              Free Workout Programs
            </Nav.Link>
            {/* <Nav.Link onClick = {() => this.props.scrollToElement('cover-spacer')}>
              Home
            </Nav.Link>
            <Nav.Link onClick = {() => this.props.scrollToElement('program-spacer')}>
              Free Workout Programs
            </Nav.Link> */}
            <Nav.Link onClick = {() => this.props.scrollToElement('contact-spacer')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    )
  }
}
