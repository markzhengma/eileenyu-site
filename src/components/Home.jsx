import React, { Component } from 'react'
import { Element } from 'react-scroll';

import ProgramList from './ProgramList';
import Cover from './Cover';

export default class Home extends Component {
  render() {
    return (
      <div className='page'>
        <Element className="spacer cover-spacer" name="cover-spacer" />
        <Cover
          scrollToElement = {this.props.scrollToElement}
        />
        <Element className="spacer program-spacer" name="program-spacer" />
        <ProgramList/>
      </div>
    )
  }
}
