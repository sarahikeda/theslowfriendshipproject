import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClass: 'box'
    }
  }

  handleClick = () => {
    this.setState({
      currentClass: 'box clicked'
    })
    console.log('hi')
  }

  render() {
    return (
      <div className={this.state.currentClass}
        onClick={this.handleClick}>
        <p className='title'>About</p>
        <p>{this.state.currentClass}</p>
      </div>
    );
  }
}

export default Box;
