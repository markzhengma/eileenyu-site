import React, { Component } from 'react';
import { scroller } from 'react-scroll';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

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
      <div className="App">
        <Header
          scrollToElement = {this.scrollToElement}
        />
        <Home
          scrollToElement = {this.scrollToElement}
        />
        <Footer/>
      </div>
    );
  }
}
