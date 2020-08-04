import React, { Component } from 'react';

export default class ProgramSingle extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  };

  componentDidMount(){
    const testData = {
      id: this.props.id,
    };

    this.setState({ 
      id: testData.id
    })
  };

  // render() {
  //   return (
  //     <div className="program-page flex-hc-vc">
  //       {this.state.id}
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="program-page flex-hc-vc">
        <img src="https://static.markzhengma.com/construction.png" alt="img" style={{width: '100%'}}/>
        {this.state.id}
      </div>
    )
  }
}
