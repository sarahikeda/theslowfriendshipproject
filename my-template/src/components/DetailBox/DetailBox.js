import React, { Component } from 'react';

class DetailBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClass: 'box',
      explanationText: ''
    }
  }

  changeDisplay = () => {
    let newClass = this.state.currentClass === 'box' ? 'box ' + this.props.otherColor : 'box';
    let description = this.state.explanationText === '' ? 'Learn more about the event.' : '';

    this.setState({
      currentClass: newClass,
      explanationText: description
    })
  }

  render() {
    return (
      <div className={this.state.currentClass}
        onMouseEnter={this.changeDisplay}
        onMouseLeave={this.changeDisplay}>
        <p className='title'>{this.props.title}</p>
        <p>{this.state.explanationText}</p>
      </div>
    );
  }
}

export default DetailBox;
// change the background color
