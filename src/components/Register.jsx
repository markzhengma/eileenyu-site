import React, { Component } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default class Register extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      gender: '',
      level: '',
      age: '',
      isRemembered: false,
      isShowHint: false,
      hint: '请输入完整的用户名和密码哟',
      isLoading: false,
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
  };

  confirmRegister = async (e) => {
    e.preventDefault();

    let self = this;
    let { username, password, gender, level, age, isRemembered, isLoading } = self.state;

    if(!isLoading) {
      if(username === '' || password === '') {
        self.showHint('请输入完整的用户名和密码哟');

      } else {
        await self.changeLoadingStatus(true);
        
        // let csrfToken = Cookies.get('csrfToken');

        const loginRes = await axios({
          url: 'http://localhost:7001/user/register', 
          method: 'POST',
          data: {
            username,
            password,
            gender,
            age,
            level,
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

        let registerCallBack = () => {
          if(!loginRes || !loginRes.data) {
            self.showHint('啊哦网络开小差了');

          } else if (loginRes.data.code !== 200) {
            switch(loginRes.data.code) {
              case 4012:
                self.showHint('用户名被占用，换一个试试吧！');
                break;
              default: 
                self.showHint('注册失败');
                break;
            }
            console.error(loginRes.data);

          } else {
            // await clearTimeout(timeout);
            this.props.setUser(loginRes.data.data);
            this.props.changeShowRegisterBox(false);

          }
        }

        setTimeout(() => {
          self.changeLoadingStatus(false, registerCallBack);
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
    this.props.changeShowRegisterBox(false)
  };

  navToLogin = () => {
    this.props.changeShowLoginBox(true);
    this.props.changeShowRegisterBox(false);
  }

  render() {
    return(
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
            onSubmit={this.confirmRegister}
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
            <Form.Group>
              <Form.Label>性别</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="性别" 
                name = "gender"
                onChange = {this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>年龄</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="年龄" 
                name = "age"
                onChange = {this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>训练等级</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="训练等级" 
                name = "level"
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
              <Button 
                variant="danger" 
                onClick={this.navToLogin}
              >
                返回
              </Button>
              <Button 
                variant="success"
                type="submit"
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