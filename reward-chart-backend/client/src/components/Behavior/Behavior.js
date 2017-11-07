import React from 'react';
// import './Behavior.css';

class Behavior extends React.Component {
  render() {
    return (
          <tr>
            <td>{this.props.behavior.name}</td>
            <td className="point">{this.props.behavior.points}</td>
          </tr>
    );
  }
}

export default Behavior;
