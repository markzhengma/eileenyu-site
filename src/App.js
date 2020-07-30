import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ChaptSingle from './components/ChaptSingle';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      page: 'home'
    }

    this.scrollToElement = this.scrollToElement.bind(this);
  };

  scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 500,
      smooth: true,
    })
  };
  

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            scrollToElement = {this.scrollToElement}
          />
          <Switch>
            <Route exact path="/">
            <Home
              scrollToElement = {this.scrollToElement}
            />
            </Route>
            <Route path="/program">
              <ChaptSingle />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}
