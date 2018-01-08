import React, { Component } from 'react';
import DetailBox from '../DetailBox/DetailBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Panels</h1>
        </header>
        <DetailBox title="Details" otherColor='details'/>
        <DetailBox title="Who" otherColor='who'/>
        <DetailBox title="When"/>
        <DetailBox title="Where"/>
      </div>
    );
  }
}

export default App;
