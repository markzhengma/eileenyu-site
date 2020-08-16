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

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      page: 'home'
    }

    this.scrollToElement = this.scrollToElement.bind(this);
  };

  // async componentDidMount(){
  //   console.log(navigator.languages);
  //   const ipData = await axios.get('https://api.ipify.org?format=json');
  //   console.log(ipData);
    // const ipData = await axios.get('http://ip-api.com/json');
    // const country = ipData ? ipData.data.country : null;
    // this.setState({
    //   ipData: ipData ? ipData.data : null
    // });

    // switch(country) {
    //   case "China":
    //     console.log(country);
    //     console.log('检测到登陆地在中国大陆，正在切换中文设置~');
    //     break;
    //   default:
    //     console.log(country);
    //     break;
    // }
  // }

  scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 500,
      smooth: true,
    });
  };

  render() {
    function ProgramPage(){
      let id = useParams().id;
      return (
        <ProgramSingle id = { id }/>
      )
    }
    return (
      <Router>
        <ScrollToTop>
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
              <Route path="/program/:id">
                <ProgramPage />
              </Route>
              <Route component={Construction} />
            </Switch>
            <Contact/>
          </div>
        </ScrollToTop>
      </Router>
      
    );
  }
}
