import React, { Component } from 'react';
//import logo from './logo.svg';
import Rewards from './util/Rewards';
import './App.css';
import StartBehaviors from './components/StartBehaviors/StartBehaviors';
import RewardForm from './components/RewardForm/RewardForm';
// import Homework from './components/Homework/Homework';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startBehaviors: []
    }
  }

  componentDidMount() {
    Rewards.getBehaviors().then(behaviors => {
      this.setState({ startBehaviors: behaviors })
    });
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
          </div>
          <div className="row">
            <RewardForm behaviors={this.state.startBehaviors} />
          </div>
          {/*<div className="row">
            <Homework />
          </div>*/}
        </div>
      </div>
    );
  }
}

export default App;
