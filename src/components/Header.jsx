import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Navbar 
        collapseOnSelect
        bg="light" 
        fixed="top" 
        expand="sm"
      >
        <Navbar.Brand id="logo" href="/">
          Eileen Yu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-bar" />
        <Navbar.Collapse id="nav-bar">
          <Nav>
            { this.props.currPath === '/'
              ? <Nav.Link 
                  eventKey = 'home'
                  onClick = {() => this.props.scrollToElement('cover-spacer')}
                >
                  主页
                </Nav.Link>
              : <Nav.Link 
                  eventKey = 'home'
                  as={Link} 
                  to="/"
                >
                  主页
                </Nav.Link>
            }
            <Nav.Link 
              eventKey = 'program'
              disabled = {this.props.currPath.match('/program/')}
              onClick = {() => this.props.scrollToElement('program-spacer')}
            >
              训练计划
            </Nav.Link>
            <Nav.Link 
              eventKey = 'contact'
              onClick = {() => this.props.scrollToElement('contact-spacer')}
            >
              联系我
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    )
  }
}
