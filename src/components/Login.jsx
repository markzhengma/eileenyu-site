import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isShowHint: false,
      hint: '请输入完整的用户名和密码哟',
      isLoading: false,
      // can_save: false
    }
  };

  changeLoadingStatus = async (status) => {
    console.log('changing loading status to ' + status);
    await this.setState ({
      isLoading: status
    })
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
    let { username, password, isLoading } = self.state;

    if(!isLoading) {

      if(username === '' || password === '') {
        self.showHint('请输入完整的用户名和密码哟');

      } else {

        await self.changeLoadingStatus(true);
        
        let csrfToken = Cookies.get('csrfToken');

        const loginRes = await axios({
          url: 'http://localhost:7001/user/login', 
          method: 'POST',
          data: {
            username,
            password
          },
          headers: {
            'x-csrf-token': csrfToken
          }
        });

        let timeout = await setTimeout(() => {
          self.changeLoadingStatus(false);
        }, 500);

        if(!loginRes) {
          self.showHint('啊哦网络开小差了');
        } else if (loginRes.data.code !== 200) {
          console.log(loginRes.data)
        } else {
          clearTimeout(timeout);
          await this.props.changeShowLoginBox(false);
        }

      }
    }
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormInsideClick = e => {
    e.stopPropagation();
  };

  handleFormOutsideClick = e => {
    this.props.changeShowLoginBox(false)
  };

  navToRegister = () => {
    console.log('register!')
  }

  render() {
    return (
      <div 
        id="login-container" 
        className="flex-hc-vc"
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
          <Form
            onSubmit={this.confirmLogin}
          >
            <Form.Group>
              <Form.Label>用户名</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Username" 
                name = "username"
                onChange = {this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>密码</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                name = "password"
                onChange = {this.handleInputChange}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="Check me out"
                name = "can_save"
                onChange = {this.handleInputChange}
              />
            </Form.Group> */}

            <div id="login-box-btngroup" className="flex-hs-vc">
              <Button variant="success" type="submit">
                登录
              </Button>
              <Button 
                variant="warning"
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