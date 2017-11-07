import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import StartBehaviors from './components/StartBehaviors/StartBehaviors';
import Homework from './components/Homework/Homework';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startBehaviors: [
        {
          id: 1,
          name: "Clean Room",
          points: 10
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-2">
            <h1>Reward Chart</h1>
          </div>
        </div>
        <div className="App">
          <div className="App-rewards row">
            <StartBehaviors behaviors={this.state.startBehaviors} />
            <Homework />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
