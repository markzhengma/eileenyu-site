import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
// import axios from 'axios';
// import { CookiesProvider } from 'react-cookie';

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import ProgramSingle from './components/ProgramSingle';
import Construction from './components/Construction';

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
      page: 'home'
    }

    this.scrollToElement = this.scrollToElement.bind(this);
    this.changePath = this.changePath.bind(this);
    this.changePage = this.changePage.bind(this);
  };

  changePath = (path) => {
    this.setState({
      currPath: path
    })
    console.log(path)
  };

  changePage = (page) => {
    this.setState({
      page
    })
  };

  scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 500,
      smooth: true,
    });
  };

  render() {
    
    return (
      <Router>
        <ScrollToTop
          changePath = { this.changePath }
        >
          <div className="App">
            <Header
              currPath = { this.state.currPath }
              scrollToElement = { this.scrollToElement }
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
            <Contact/>
          </div>
        </ScrollToTop>
      </Router>
      
    );
  }
}
