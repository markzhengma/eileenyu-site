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
        <Navbar.Brand 
          id="logo" 
          as={Link} 
          to="/"
        >
          Eileen Yu
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="nav-bar">
          <Nav>
            { this.props.currPath === '/'
              ? <Nav.Link 
                  eventKey = 'home'
                  onSelect = {() => this.props.scrollToElement('cover-spacer')}
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
            {/* {
              this.props.userData 
                ? <Dropdown alignRight>
                    <Dropdown.Toggle 
                      childBsPrefix="profile-btn flex-hs-vc"
                    >
                      <div id="profile-btn-text">
                        {this.props.userData.displayname}
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu 
                      style={{
                        border: 'none', 
                        backgroundColor: '#f8f9fa'
                      }}
                    >
                      <Dropdown.Item disabled>训练进度（即将推出）</Dropdown.Item>
                      <Dropdown.Item disabled>我的收藏（施工中）</Dropdown.Item>
                      <Dropdown.Item disabled>我的资料（施工中）</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        style={{color: '#00000080'}}
                        onSelect={() => this.props.setUser(null)}
                      >
                        退出登录
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                :  <Nav.Link 
                    eventKey = 'login'
                    onClick = {() => this.props.changeShowLoginBox(true)}
                  >
                    登录
                  </Nav.Link>
            } */}
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    )
  }
}
