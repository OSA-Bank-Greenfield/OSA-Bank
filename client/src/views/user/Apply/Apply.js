import React from 'react';
import './Apply.css';
import axios from 'axios';

class ApplyForLoan extends React.Component {
  state = { date: '', time: '', agency: '', success: 'false' };

  handleChangeDate = (e) => {
    this.setState({ date: e.target.value });
  };

  handleChangeTime = (e) => {
    this.setState({ time: e.target.value });
  };

  handleChangeAgency = (e) => {
    this.setState({ agency: e.target.value });
  };

  sendAppoint = () => {
    axios
      .post('http://localhost:5000/appointement', this.state)
      .then((response) => {
        // console.log('here');
        this.viewToSuccess();
      })
      .catch((err) => console.log('Error', err));
  };

  viewToSuccess = () => {
    this.setState({ success: 'true' });
  };

  render() {
    if (this.state.success === 'false') {
      return (
        <div>
          <div className="container">
            <div className="h1container">
              <h1>Make An Appointement</h1>
            </div>
            <label>Choose A Date</label>
            <div className="box">
              <input
                className="amount"
                type="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.handleChangeDate}
              ></input>
            </div>
            <label>Choose A Time</label>
            <div className="box">
              <select value={this.state.time} onChange={this.handleChangeTime}>
                <option value="08:00 AM- 12:00 AM">08:00 AM- 12:00 AM</option>
                <option value="01:00 PM- 05:00 PM">01:00 PM- 05:00 PM</option>
              </select>
            </div>
            <label>Where?</label>
            <div className="box">
              <select
                value={this.state.agency}
                onChange={this.handleChangeAgency}
              >
                <option value="Tunis - Ghazella">Tunis - Ghazella</option>
                <option value="Tunis - Ben Arous">Tunis - Ben Arous</option>
                <option value="Sousse">Sousse</option>
                <option value="Mahdia">Mahdia</option>
              </select>
            </div>
            <button className="calculate" onClick={this.sendAppoint}>
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return <h1>Your appointement is being processed, Thanks!</h1>;
    }
  }
}

export default ApplyForLoan;
