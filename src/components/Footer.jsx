import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class Footer extends Component {
  constructor() {
    super();

    this.state = {
      selectedIcon: 'mail',
      selectedData: {
        image: 'https://static.markzhengma.com/cover_mail.jpg',
        url: 'mailto:comeoneileen12@163.com',
        btnTxt: 'Send Email',
        disabled: false
      },
      smData: {
        mail: {
          image: 'https://static.markzhengma.com/cover_mail.jpg',
          url: 'mailto:comeoneileen12@163.com',
          btnTxt: 'Send Email',
          disabled: false
        },
        yt: {
          image: 'https://static.markzhengma.com/cover_yt.jpg',
          url: 'https://www.youtube.com/c/EileenYu?sub_confirmation=1',
          btnTxt: 'To My YouTube Channel',
          disabled: false
        },
        bili: {
          image: 'https://static.markzhengma.com/cover_bili.jpg',
          url: 'https://space.bilibili.com/344135105',
          btnTxt: 'To My Bilibili Channel',
          disabled: false
        },
        ins: {
          image: 'https://static.markzhengma.com/cover_ins.jpg',
          url: 'https://www.instagram.com/eileenismart',
          btnTxt: 'To My Instagram Channel',
          disabled: false
        },
        wb: {
          image: 'https://static.markzhengma.com/cover_wb.jpg',
          url: 'https://www.weibo.com/p/1005052913443311/home',
          btnTxt: 'To My Weibo Page',
          disabled: false
        },
        xigua: {
          image: 'https://static.markzhengma.com/cover_xigua.jpg',
          url: 'https://www.ixigua.com/home/3474099493142808',
          btnTxt: 'To My Xigua Channel',
          disabled: false
        },
        wechat: {
          image: 'https://static.markzhengma.com/cover_wechat.jpg',
          url: '',
          btnTxt: 'Scan QR Code for my Wechat Articles',
          disabled: true
        }
      }
    }
  }

  selectSM = (icon) => {
    this.setState({
      selectedIcon: icon,
      selectedData: this.state.smData[icon]
    })
  };

  handleOpenPage = (url) => {
    window.open(url, '_blank');
  }

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
            <div>
              <Nav>
                {/* <Nav.Link href="mailto:comeoneileen12@163.com">
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
                <OverlayTrigger trigger={["hover","click"]} placement="top" overlay={wechatPop}>
                  <Nav.Link href="#" target='_blank' rel="noopener noreferrer">
                    <span className="iconfont icon-wechat"></span>
                  </Nav.Link>
                </OverlayTrigger>
                <Nav.Link href="https://www.ixigua.com/home/3474099493142808" target='_blank' rel="noopener noreferrer">
                  <span className="iconfont icon-xiguashipin"></span>
                </Nav.Link> */}
                <Nav.Link onMouseEnter={()=>this.selectSM('mail')}>
                  <span className="iconfont icon-email"></span>
                </Nav.Link>
                <Nav.Link onMouseEnter={()=>this.selectSM('yt')}>
                  <span className="iconfont icon-youtube"></span>
                </Nav.Link>
                <Nav.Link onMouseEnter={()=>this.selectSM('bili')}>
                  <span className="iconfont icon-bilibili-fill"></span>
                </Nav.Link>
                <Nav.Link onMouseEnter={()=>this.selectSM('ins')}>
                  <span className="iconfont icon-instagram"></span>
                </Nav.Link>
                <Nav.Link onMouseEnter={()=>this.selectSM('wb')}>
                  <span className="iconfont icon-weibo"></span>
                </Nav.Link>
                <Nav.Link onMouseEnter={()=>this.selectSM('xigua')}>
                  <span className="iconfont icon-xiguashipin"></span>
                </Nav.Link>
                <Nav.Link onMouseEnter={()=>this.selectSM('wechat')}>
                  <span className="iconfont icon-wechat"></span>
                </Nav.Link>
              </Nav>
              <div id="sm-display">
                {/* {this.state.selectedIcon} */}
                <img 
                  id = 'sm-display-img'
                  src = { this.state.selectedData.image }
                  alt = 'sm-display-img'
                />
                <Button 
                  variant="success" 
                  id="sm-btn"
                  onClick={ () => this.handleOpenPage(this.state.selectedData.url) }
                  disabled={ this.state.selectedData.disabled }
                >
                  { this.state.selectedData.btnTxt }
                </Button>
              </div>
            </div>
            <Navbar.Brand id="copyright">
              © 2020 Eileen Yu
            </Navbar.Brand>
          </Navbar.Collapse>
          
        </Navbar>
      </div>
    )
  }
}
