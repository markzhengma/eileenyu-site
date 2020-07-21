import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    // const wechatPop = (
    //   <Popover bsPrefix="popover-contact" style={{ margin: 0 }}>
    //     <Popover.Title as="h3">Wechat Articles</Popover.Title>
    //     <Popover.Content bsPrefix="popover-contact">
    //       <Image src="https://static.markzhengma.com/qr_wechat.jpg" />
    //     </Popover.Content>
    //   </Popover>
    // );

    return (
      <div>
        <Element className="spacer contact-spacer" name="contact-spacer" />
        <div className="title title-section">Contact</div>
        <Navbar bg="light">
          <Navbar.Collapse id="footer-navbar">
            <Nav>
              <Nav.Link href="mailto:comeoneileen12@163.com">
                <span className="iconfont icon-email"></span>
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/c/EileenYu?sub_confirmation=1" target='_blank' rel="noopener noreferrer">
                <span className="iconfont icon-youtube"></span>
              </Nav.Link>
              <Nav.Link href="https://space.bilibili.com/344135105" target='_blank' rel="noopener noreferrer">
                <span className="iconfont icon-bilibili-fill"></span>
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/eileenismart" target='_blank' rel="noopener noreferrer">
                <span className="iconfont icon-instagram"></span>
              </Nav.Link>
              <Nav.Link href="https://www.weibo.com/p/1005052913443311/home?from=page_100505&mod=TAB#place" target='_blank' rel="noopener noreferrer">
                <span className="iconfont icon-weibo"></span>
              </Nav.Link>
              <Nav.Link href="#" target='_blank' rel="noopener noreferrer">
                <span className="iconfont icon-wechat"></span>
              </Nav.Link>
              <Nav.Link href="https://www.ixigua.com/home/3474099493142808" target='_blank' rel="noopener noreferrer">
                <span className="iconfont icon-xiguashipin"></span>
              </Nav.Link>
            </Nav>
            <Navbar.Brand id="copyright">
              © 2020 Eileen Yu
            </Navbar.Brand>
          </Navbar.Collapse>
          
        </Navbar>
      </div>
    )
  }
}
