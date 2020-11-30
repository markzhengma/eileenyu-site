import React, { Component } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
// import Cookies from 'js-cookie';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isShowHint: false,
      hint: '请输入完整的用户名和密码哟',
      isLoading: false,
      isRemembered: false
    }
  };

  changeLoadingStatus = async (status, callback) => {
    await this.setState ({
      isLoading: status
    }, callback)
  };

  showHint = (hint) => {
    this.setState({
      isShowHint: true,
      hint: hint
    });

    setTimeout(() => {
      this.setState({
        isShowHint: false,
        hint: hint
      });
    }, 3000)
  }

  confirmLogin = async (e) => {
    e.preventDefault();

    let self = this;
    let { username, password, isRemembered, isLoading } = self.state;

    if(!isLoading) {

      if(username === '' || password === '') {
        self.showHint('请输入完整的用户名和密码哟');

      } else {
        await self.changeLoadingStatus(true);
        
        // let csrfToken = Cookies.get('csrfToken');

        const loginRes = await axios({
          url: 'http://localhost:7001/user/login', 
          method: 'POST',
          data: {
            username,
            password,
            isRemembered
          },
          withCredentials: true
          // headers: {
          //   'x-csrf-token': csrfToken,
          // }
        })
        .catch(() => {
          self.showHint('啊哦网络开小差了');
        });

        let loginCallBack = () => {
          if(!loginRes || !loginRes.data) {
            self.showHint('啊哦网络开小差了');

          } else if (loginRes.data.code !== 200) {
            self.showHint('请再检查一下用户名和密码哟');
            console.error(loginRes.data);

          } else {
            // await clearTimeout(timeout);
            this.props.setUser(loginRes.data.data);
            this.props.changeShowLoginBox(false);

          }
        }

        setTimeout(() => {
          self.changeLoadingStatus(false, loginCallBack);
        }, 500);
      }
    }
  };

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormInsideClick = e => {
    e.stopPropagation();
  };

  handleFormOutsideClick = e => {
    this.props.changeShowLoginBox(false);
  };

  navToRegister = () => {
    this.props.changeShowRegisterBox(true, () => this.props.changeShowLoginBox(false));
  }

  render() {
    return (
      <div 
        className="popup-container flex-hc-vc"
        onClick = {this.handleFormOutsideClick}
      >
        <div 
          id="login-box"
          onClick = {this.handleFormInsideClick}
        >
          {
            this.state.isShowHint
            ? <span
                className = "hint"
              >
                *{this.state.hint}
              </span>
            : ''
          }
          {
            this.state.isLoading
              ? <div className="loading flex-hc-vc">
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    variant="light"
                  />
                </div>
              : ''
          }
          <Form
            onSubmit={this.confirmLogin}
          >
            <Form.Group>
              <Form.Label>用户名</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="用户名" 
                name = "username"
                onChange = {this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>密码</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="密码" 
                name = "password"
                onChange = {this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="记住我"
                name = "isRemembered"
                onChange = {this.handleInputChange}
              />
            </Form.Group>

            <div id="login-box-btngroup" className="flex-hs-vc">
              <Button variant="success" type="submit">
                登录
              </Button>
              <Button 
                variant="light"
                onClick={this.navToRegister}
              >
                注册
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}