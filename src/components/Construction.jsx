import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Construction extends Component {
  render() {
    return (
      <div className="construction-page flex-hc-vc">
        <div className="spacer"></div>
        <img src="https://static.eileen-yu.com/construction.png" alt="img" style={{width: '100%'}}/>
        <Button 
          id="construction-btn" 
          variant="danger"
          href="/"
        >
          回到主页
        </Button>
      </div>
    )
  }
}
