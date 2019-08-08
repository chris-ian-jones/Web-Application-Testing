import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  // method to record a strike
  recordStrike = () => {
    this.setState({ strikes: (this.state.strikes + 1) })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.strikes}</p>
        <button onClick={this.recordStrike}>Strike!</button>
      </div>
    );
  }
}
export default App;
