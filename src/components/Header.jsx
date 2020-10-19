import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" fixed="top">
        <Navbar.Brand id="logo" href="/">
          Eileen Yu
        </Navbar.Brand>
        <Navbar.Collapse id="nav-bar">
          <Nav>
            <Nav.Link href="/">
              主页
            </Nav.Link>
            <Nav.Link href="/program/c20200814">
              训练计划
            </Nav.Link>
            {/* <Nav.Link onClick = {() => this.props.scrollToElement('cover-spacer')}>
              Home
            </Nav.Link>
            <Nav.Link onClick = {() => this.props.scrollToElement('program-spacer')}>
              Free Workout Programs
            </Nav.Link> */}
            <Nav.Link onClick = {() => this.props.scrollToElement('contact-spacer')}>
              联系我
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    )
  }
}
