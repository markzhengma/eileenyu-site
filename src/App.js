import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import ProgramSingle from './components/ProgramSingle';
import Login from './components/Login';
import Register from './components/Register';
import Construction from './components/Construction';
import FAQ from './components/FAQ';

import ScrollToTop from './utils/ScrollToTop';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProgramPage(){
  let id = useParams().id;
  return (
    <ProgramSingle
      id = { id }
    />
  )
}

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      currPath: '/',
      isShowLoginBox: false,
      isShowRegisterBox: false,
      userData: null
    }

    this.scrollToElement = this.scrollToElement.bind(this);
    this.changePath = this.changePath.bind(this);
    this.changeShowLoginBox = this.changeShowLoginBox.bind(this);
    this.changeShowRegisterBox = this.changeShowRegisterBox.bind(this);
    this.setUser = this.setUser.bind(this);
  };

  async componentDidMount() {
    let userCookie = Cookies.get('user');

    if(userCookie) {
      let loginRes = await axios({
        method: 'POST',
        url: 'https://api.eileen-yu.com/user/self-login',
        withCredentials: true
      });

      if(!loginRes || !loginRes.data || loginRes.data.code !== 200) {
        console.error('user cookie invalid');
        console.error(loginRes);
      } else {
        this.setUser(loginRes.data.data);
      }
    }
  }

  changePath = (path) => {
    this.setState({
      currPath: path
    })
    // console.log(path)
  };

  scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 500,
      smooth: true,
    });
  };

  changeShowLoginBox = (status, callback) => {
    this.setState({
      isShowLoginBox: status
    }, callback)
  };

  changeShowRegisterBox = (status, callback) => {
    this.setState({
      isShowRegisterBox: status
    }, callback)
  };

  setUser = (data) => {
    this.setState({
      userData: data
    }, () => {
      if(!data) {
        Cookies.remove('user');
      }
    })
  };

  render() {
    
    return (
      <Router>
        <ScrollToTop
          changePath = { this.changePath }
        >
          <div className="App">
            {
              this.state.isShowLoginBox
                ? <Login
                    changeShowLoginBox = { this.changeShowLoginBox }
                    changeShowRegisterBox = { this.changeShowRegisterBox }
                    setUser = { this.setUser }
                  />
                : ''
            }
            {
              this.state.isShowRegisterBox
                ? <Register
                    changeShowLoginBox = { this.changeShowLoginBox }
                    changeShowRegisterBox = { this.changeShowRegisterBox }
                    setUser = { this.setUser }
                  />
                : ''
            }
            <Header
              currPath = { this.state.currPath }
              userData = { this.state.userData }
              scrollToElement = { this.scrollToElement }
              changeShowLoginBox = { this.changeShowLoginBox }
              setUser = { this.setUser }
            />
            <Switch>
              <Route exact path="/">
                <Home
                  scrollToElement = { this.scrollToElement }
                />
              </Route>
              <Route path="/program/:id">
                <ProgramPage
                />
                {/* <ProgramSingle id = 'c20201019' /> */}
              </Route>
              <Route 
                component={ Construction }
              />
            </Switch>
            <FAQ/>
            <Contact/>
          </div>
        </ScrollToTop>
      </Router>
      
    );
  }
}
