import React from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard'

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
    this.setState({ balls: (this.state.balls + 1) })
  }

  // method to record a ball
  recordBall = () => {
    this.setState({ strikes: (this.state.strikes + 1) })
    this.setState({ balls: (this.state.balls + 1) })
  }

  // method to record a foul
  recordFoul = () => {
    this.setState({ strikes: (this.state.strikes + 1) })
    this.setState({ balls: (this.state.balls + 1) })
  }

  // method to record a hit
  recordHit = () => {
    this.setState({ strikes: (this.state.strikes + 1) })
    this.setState({ balls: (this.state.balls + 1) })
  }
  
  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard 
          recordStrike={this.recordStrike}
          recordBall={this.recordBall}
          recordFoul={this.recordFoul}
          recordHit={this.recordHit}
        />
      </div>
    );
  }
}
export default App;
