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
    if (this.state.balls === 3) {
      this.setState({ 
        balls: (this.state.balls = 0),
        strikes: (this.state.strikes = 0),
      }) 
    } else if (this.state.strikes === 2) {
      this.setState({ 
        strikes: (this.state.strikes = 0) ,
        balls: (this.state.balls = 0)
      }) 
    } else {
      this.setState({ 
        strikes: (this.state.strikes + 1) ,
        balls: (this.state.balls + 1)
      })
    }
  }

  // method to record a ball
  recordBall = () => {
    if (this.state.balls === 3) {
      this.setState({ 
        strikes: (this.state.strikes = 0),
        balls: (this.state.balls = 0) 
      })
    } else {
      this.setState({ 
        balls: (this.state.balls + 1) 
      })
    }
  }

  // method to record a foul
  recordFoul = () => {
    if (this.state.balls === 3) {
      this.setState({ 
        balls: (this.state.balls = 0),
        strikes: (this.state.strikes = 0),
      }) 
    } else if (this.state.strikes === 0) {
      this.setState({ 
        balls: (this.state.balls + 1),
        strikes: (this.state.strikes = 1)
      }) 
    } else if (this.state.strikes = 2) {
      this.setState({ 
        balls: (this.state.balls + 1)
      }) 
    } else { 
      this.setState({ 
        strikes: (this.state.strikes = 2),
        balls: (this.state.balls + 1)
      })
    }
  }

  // method to record a hit
  recordHit = () => {
    this.setState({ 
      strikes: (this.state.strikes = 0 ),
      balls: (this.state.balls = 0)
    })
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
