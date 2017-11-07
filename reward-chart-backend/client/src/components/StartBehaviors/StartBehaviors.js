import React from 'react';
// import './StartBehaviors.css';
import Behavior from '../Behavior/Behavior';

class StartBehaviors extends React.Component {
  render() {
    return (
          <div className="StartBehaviors reward-table col-sm-4">
            <h2>Rewards</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.behaviors.map(behavior => {
                        return <Behavior key={behavior.id} behavior={behavior} />;
                      })
                    }
                </tbody>
              </table>
          </div>
    );
  }
}

export default StartBehaviors;
