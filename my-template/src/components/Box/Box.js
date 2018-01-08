import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClass: 'box'
    }
  }

  handleClick = () => {
    let newClass = this.state.currentClass === 'box' ? 'box clicked' : 'box';
    this.setState({
      currentClass: newClass
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
