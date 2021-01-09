import React, { Component } from 'react';
import { Form, Button, Spinner, Modal } from 'react-bootstrap';
import axios from 'axios';

export default class Register extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
      displayname: '',
      gender: '',
      level: '',
      age: '',
      isRemembered: false,
      isShowHint: false,
      hint: '请输入完整的登录名和密码哟',
      isLoading: false,
      isFirstPage: true,
      isShowModal: false
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
    let { 
      username, 
      password, 
      displayname, 
      gender, 
      level, 
      age, 
      isRemembered, 
      isLoading 
    } = self.state;

    if(!isLoading) {
      await self.changeLoadingStatus(true);
      
      // let csrfToken = Cookies.get('csrfToken');

      const loginRes = await axios({
        url: 'https://api.eileen-yu.com/user/register', 
        method: 'POST',
        data: {
          username,
          password,
          displayname,
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
              self.showHint('登录名被占用，换一个试试吧！');
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
  };

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'gender'){
      switch(value) {
        case '0':
          value = 'Female';
          break;
        case '1':
          value = 'Male';
          break;
        case '2':
          value = 'Other';
          break;
        default:
          value = 'Private';
          break;
      }
    };

    if (name === 'age') {
      switch(value) {
        case '0':
          value = '14-';
          break;
        case '2':
          value = '25-34';
          break;
        case '3':
          value = '35-44';
          break;
        case '4':
          value = '45+';
          break;
        default:
          value = '15-24';
          break;
      }
    };
    
    if (name === 'level') {
      switch(value) {
        case '0':
          value = '0';
          break;
        case '1':
          value = '1';
          break;
        case '3':
          value = '3';
          break;
        case '4':
          value = '4';
          break;
        default:
          value = '2';
          break;
      }
    };

    this.setState({
      [name]: value
    });
  };

  // handleFormInsideClick = e => {
  //   e.stopPropagation();
  // };

  // handleFormOutsideClick = e => {
  //   this.props.changeShowRegisterBox(false)
  // };

  navToLogin = () => {
    this.props.changeShowLoginBox(true, () => this.props.changeShowRegisterBox(false));
  };

  changeRegisterPage = () => {
    let self = this;
    let { isFirstPage, username, password, passwordCheck, displayname } = self.state;

    if(isFirstPage) {
      if(username === '' || password === '' || passwordCheck === '' || displayname === '') {
        self.showHint('登录名、密码和昵称都是必须的哟');

      } else if (!username.match(/^[a-z0-9]+$/i)){
        self.showHint('登录名只能输入英文字母和数字哦');

      } else if(passwordCheck !== password){
        self.showHint('啊哦，两次输入的密码不一样呢');

      } else {
        self.setState({
          isFirstPage: !isFirstPage
        })
      }
    } else {
      self.setState({
        isFirstPage: !isFirstPage
      })
    }
  };

  closeRegisterWindow = () => {
    this.showCancelConfirm();
    this.props.changeShowRegisterBox(false);
  };

  showCancelConfirm = () => {
    let isShowModal = this.state.isShowModal;
    this.setState({
      isShowModal: !isShowModal
    })
  }

  render() {
    return(
      <div 
        className="popup-container flex-hc-vc" 
        // onClick = {this.handleFormOutsideClick}
      >
        <Modal
          show={this.state.isShowModal}
          onHide={this.showCancelConfirm}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>确认取消注册</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            现在取消的话，已填写的信息将不会被保存哟。
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.showCancelConfirm}>
              我再想想
            </Button>
            <Button variant="danger" onClick={this.closeRegisterWindow}>
              确定
            </Button>
          </Modal.Footer>
        </Modal>
        <div 
          id="register-box"
          // onClick = {this.handleFormInsideClick}
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
            {
              this.state.isFirstPage
                ? <div>
                    <Form.Group>
                      <Form.Label>登录名</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="英文字母+数字，用来登录" 
                        name = "username"
                        onChange = {this.handleInputChange}
                      />
                    </Form.Group>
      
                    <Form.Group>
                      <Form.Label>密码</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="密码要记好哦" 
                        name = "password"
                        onChange = {this.handleInputChange}
                      />
                    </Form.Group>
      
                    <Form.Group>
                      <Form.Label>再次输入密码</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="请再输入一次相同的密码" 
                        name = "passwordCheck"
                        onChange = {this.handleInputChange}
                      />
                    </Form.Group>
                          
                    <Form.Group>
                      <Form.Label>昵称</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="昵称会展示在社区哟" 
                        name = "displayname"
                        onChange = {this.handleInputChange}
                      />
                    </Form.Group>

                    <div id="register-box-btngroup" className="flex-hs-vc">
                      <Button 
                        variant="light" 
                        onClick={this.showCancelConfirm}
                      >
                        取消
                      </Button>
                      <Button 
                        variant="warning"
                        onClick={this.changeRegisterPage}
                      >
                        继续
                      </Button>
                    </div>
                  </div>
                : <div>
                    <Form.Group>
                      <Form.Label>1.选择最贴切描述你的性别（非必填）</Form.Label>
                      <Form.Control 
                        as="select" 
                        name = "gender"
                        onChange = {this.handleInputChange}
                      >
                        <option value="0">女生</option>
                        <option value="1">男生</option>
                        <option value="2">其他</option>
                        <option value="3">保密</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>2.你属于哪个年龄段（非必填）</Form.Label>
                      <Form.Control 
                        as="select" 
                        name = "age"
                        onChange = {this.handleInputChange}
                      >
                        <option value="0">14以下</option>
                        <option value="1">15-24</option>
                        <option value="2">25-34</option>
                        <option value="3">35-44</option>
                        <option value="4">45以上</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>3.每周几次健身（非必填）</Form.Label>
                      <Form.Control 
                        as="select" 
                        name = "level"
                        onChange = {this.handleInputChange}
                      >
                        <option value="0">0次-想要运动更多</option>
                        <option value="1">1次-至少一次运动</option>
                        <option value="2">2次-适量运动</option>
                        <option value="3">3次-规律训练</option>
                        <option value="4">4次或更多-密集训练</option>
                      </Form.Control>
                    </Form.Group>
                    <div id="register-box-btngroup" className="flex-hs-vc">
                      <Button 
                        variant="light" 
                        onClick={this.showCancelConfirm}
                      >
                        取消
                      </Button>
                      <Button 
                        variant="warning"
                        onClick={this.confirmRegister}
                      >
                        提交
                      </Button>
                    </div>
                  </div>
            }
          </Form>
        </div>
      </div>
    )
  }
}