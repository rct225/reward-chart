import React from 'react';
// import './Homework.css';

class Homework extends React.Component {
  render() {
    return (
      <div className="Homework col-sm-4">
        <h2>Homework Reward</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Neat:</td>
              <td className="point">
                <label className="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox1" value="option1"/>1
                </label>
              </td>
            </tr>
            <tr>
              <td>Correct:</td>
              <td className="point">
                <label className="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox2" value="option2"/>1
                </label>
              </td>
            </tr>
            <tr>
              <td>Thorough:</td>
              <td className="point">
                <label className="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox3" value="option3"/>1
                </label>
              </td>
            </tr>
            <tr>
              <td>No complaining:</td>
              <td className="point">
                <label className="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox4" value="option4"/>1
                </label>
              </td>
            </tr>
            <tr>
              <td>Starting on your own:</td>
              <td className="point">
                <label className="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox5" value="option5"/>1
                </label>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>TOTAL POSSIBLE SCORE</td>
              <td className="point">5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Homework;
