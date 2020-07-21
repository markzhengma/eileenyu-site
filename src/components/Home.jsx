import React, { Component } from 'react'
import { Element } from 'react-scroll';

import ChaptList from './ChaptList';
import Cover from './Cover';

export default class Home extends Component {
  render() {
    return (
      <div className='page'>
        <Element className="spacer cover-spacer" name="cover-spacer" />
        <Cover
          scrollToElement = {this.props.scrollToElement}
        />
        <Element className="spacer chapter-spacer" name="chapter-spacer" />
        <div className="title title-section">Free Programs</div>
        <ChaptList/>
      </div>
    )
  }
}
