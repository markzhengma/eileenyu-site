import React, { Component } from 'react'
import { Element } from 'react-scroll';
import { Button } from 'react-bootstrap';

import ProgramList from './ProgramList';

export default class Home extends Component {
  handleYTRedirect = () => {
    window.open('https://www.youtube.com/c/EileenYu?sub_confirmation=1', '_blank');
  };
  handleBiliRedirect = () => {
    window.open('https://space.bilibili.com/344135105', '_blank');
  };
  
  render() {
    return (
      <div className='page'>
        <Element className="spacer cover-spacer" name="cover-spacer" />
        <div id="home-cover">
          <div id="home-cover-title">
            <b>来这里，遇见更强大的自己...</b>
            <Button
              variant="outline-danger" 
              onClick={this.handleYTRedirect}
              style={{fontWeight: '600'}}
            >
              关注我
            </Button>
            {/* <Button
              variant="outline-primary" 
              onClick={this.handleBiliRedirect}
            >
              LIKE
            </Button> */}
          </div>
          <div id="home-cover-img"/>
        </div>
        <Element className="spacer program-spacer" name="program-spacer" />
        <ProgramList/>
      </div>
    )
  }
}
