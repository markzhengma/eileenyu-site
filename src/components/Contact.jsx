import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      selectedIcon: 'mail',
      selectedData: {
        image: 'https://static.eileen-yu.com/eileenyu/cover_mail.png',
        url: 'mailto:comeoneileen12@163.com',
        btnTxt: '发邮件给我',
        btn_bg: '',
        bg_color: '#f8f9fa',
        disabled: false
      },
      smData: {
        mail: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_mail.png',
          url: 'mailto:comeoneileen12@163.com',
          btnTxt: '发邮件给我',
          btn_bg: '',
          bg_color: '#f8f9fa',
          disabled: false
        },
        yt: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_yt.png',
          url: 'https://www.youtube.com/c/EileenYu?sub_confirmation=1',
          btnTxt: '打开YouTube',
          btn_bg: '',
          bg_color: '#EDC3C4',
          disabled: false
        },
        bili: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_bili.png',
          url: 'https://space.bilibili.com/344135105',
          btnTxt: '打开Bilibili',
          btn_bg: '',
          bg_color: '#E4E5D9',
          disabled: false
        },
        ins: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_ins.png',
          url: 'https://www.instagram.com/eileenismart',
          btnTxt: '打开Instagram',
          btn_bg: '',
          bg_color: '#F6F0DA',
          disabled: false
        },
        wb: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_wb.png',
          url: 'https://www.weibo.com/p/1005052913443311/home',
          btnTxt: '打开微博',
          btn_bg: '',
          bg_color: '#EBE0D7',
          disabled: false
        },
        xigua: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_xigua.png',
          url: 'https://www.ixigua.com/home/3474099493142808',
          btnTxt: '打开西瓜视频',
          btn_bg: '',
          bg_color: '#F8E8EB',
          disabled: false
        },
        wechat: {
          image: 'https://static.eileen-yu.com/eileenyu/cover_wechat.png',
          url: '',
          btnTxt: '扫描二维码看微信公众号',
          btn_bg: '',
          bg_color: '#FFF6D7',
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
    //       <Image src="https://static.eileen-yu.com/qr_wechat.jpg" />
    //     </Popover.Content>
    //   </Popover>
    // );

    return (
      <div className="flex-vc">
        <Element className="spacer contact-spacer" name="contact-spacer" />
        <div 
          className="title title-section"
        >
          联系我
        </div>
        <Navbar id = "footer-navbar">
          <Navbar.Collapse id="footer-navbar-collapse">
            <div>
              <Nav id = "footer-navbar-links">
                <Nav.Link
                  className='smicon-link'
                  onMouseEnter={()=>this.selectSM('mail')}
                  style={{backgroundColor: this.state.selectedIcon === 'mail' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-email"></div>
                </Nav.Link>
                <Nav.Link
                  className="smicon-link"
                  onMouseEnter={()=>this.selectSM('yt')}
                  style={{backgroundColor: this.state.selectedIcon === 'yt' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-youtubesmall"></div>
                </Nav.Link>
                <Nav.Link
                  className="smicon-link"
                  onMouseEnter={()=>this.selectSM('bili')}
                  style={{backgroundColor: this.state.selectedIcon === 'bili' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-bilismall"></div>
                </Nav.Link>
                <Nav.Link
                  className="smicon-link"
                  onMouseEnter={()=>this.selectSM('ins')}
                  style={{backgroundColor: this.state.selectedIcon === 'ins' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-instagram"></div>
                </Nav.Link>
                <Nav.Link
                  className="smicon-link"
                  onMouseEnter={()=>this.selectSM('wb')}
                  style={{backgroundColor: this.state.selectedIcon === 'wb' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-weibo"></div>
                </Nav.Link>
                <Nav.Link
                  className="smicon-link"
                  onMouseEnter={()=>this.selectSM('xigua')}
                  style={{backgroundColor: this.state.selectedIcon === 'xigua' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-xigua"></div>
                </Nav.Link>
                <Nav.Link
                  className="smicon-link"
                  onMouseEnter={()=>this.selectSM('wechat')}
                  style={{backgroundColor: this.state.selectedIcon === 'wechat' ? this.state.selectedData.bg_color : ''}}
                >
                  <div className="icon-small icon-wechat"></div>
                </Nav.Link>
              </Nav>
              <div 
                id="sm-display"
                style = {{backgroundColor: this.state.selectedData.bg_color}}
              >
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
              <a target="_blank" 
                rel="noopener noreferrer"
                href="https://www.youtube.com/c/EileenYu" 
                style={{display:'inline-block',textDecoration: 'none', height:'20px', lineHeight:'20px'}}>
                  <p style={{float:'left',height:'20px',lineHeight:'20px',margin: '0px 0px 0px 5px', color:'#939393'}}>
                    © 2021 Eileen Yu
                  </p>
              </a>
              {/* <a target="_blank" 
                rel="noopener noreferrer"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=15070202000140" 
                style={{display:'inline-block',textDecoration: 'none', height:'20px', lineHeight:'20px'}}>
                <img 
                  src={require('../images/beian_2.png')} 
                  alt=""
                  style={{float:'left'}}/>
                <p style={{float:'left',height:'20px',lineHeight:'20px',margin: '0px 0px 0px 5px', color:'#939393'}}>
                  蒙公网安备 15070202000140号
                </p>
              </a> */}
              <a target="_blank" 
                rel="noopener noreferrer"
                href="http://beian.miit.gov.cn" 
                style={{display:'inline-block',textDecoration: 'none', height:'20px', lineHeight:'20px'}}>
                <p style={{float:'left',height:'20px',lineHeight:'20px',margin: '0px 0px 0px 5px', color:'#939393'}}>
                  京ICP备2021034872号-1	
                </p>
              </a>
            </Navbar.Brand>
          </Navbar.Collapse>
          
        </Navbar>
      </div>
    )
  }
}
