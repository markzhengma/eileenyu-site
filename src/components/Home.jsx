import React, { Component } from 'react'
import { Element } from 'react-scroll';
import { Button } from 'react-bootstrap';

import ProgramList from './ProgramList';
// import Cover from './Cover';

export default class Home extends Component {
  handleSubscribe = () => {
    window.open('https://www.youtube.com/c/EileenYu?sub_confirmation=1', '_blank');
  };
  
  render() {
    return (
      <div className='page'>
        <Element className="spacer cover-spacer" name="cover-spacer" />
        {/* <Cover
          scrollToElement = {this.props.scrollToElement}
        /> */}
        <div id="home-cover">
          <div id="home-cover-title">
            <b>来这里，遇见更强大的自己...</b>
            <Button
              variant="danger" 
              id="cover-btn"
              onClick={this.handleSubscribe}
            >
              SUBSCRIBE
            </Button>
          </div>
          <div id="home-cover-img"/>
        </div>
        <Element className="spacer program-spacer" name="program-spacer" />
        <ProgramList/>
      </div>
    )
  }
}
