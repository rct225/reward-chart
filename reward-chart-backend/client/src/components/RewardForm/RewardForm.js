import React from 'react';
// import './Behavior.css';
import Rewards from '../../util/Rewards';

class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDate: "",
      behaviorId: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Your favorite flavor is: ' + this.state.behaviorId);
    // event.preventDefault();
    console.log(this.state);
    Rewards.createReward(this.state);
  }


  render() {
    return (
      <div className="col-sm-6">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className='input-group date' id='datetimepicker1'>
              {/*<label for="eventDate" className="control-label">Date:</label>*/}
              <input name="eventDate" type='text' className="form-control"
                value={this.state.eventDate} onChange={this.handleInputChange} />
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div className="form-group">
              {/*<label for="behaviorId" className="control-label">Choose a behavior:</label>*/}
              <select className="form-control" name="behaviorId" value={this.state.behaviorId}
                onChange={this.handleInputChange}>
                {
                  this.props.behaviors.map(behavior => {
                      return <option value={behavior.id}>{behavior.name}</option>;
                    })
                }
              </select>
          </div>
          <button type="submit" value="Submit" className="btn btn-primary">REWARD!</button>
        </form>
      </div>
    );
  }
}

export default RewardForm;
