import React from 'react';
import './Simulator.css';
import SimulatorResult from './SimResult';

class Simulator extends React.Component {
  state = { amount: 0, numberOfYears: 1, frequency: 1, calcView: 'false' };

  handleChangeAmount = (e) => {
    this.setState({ amount: e.target.value, numberOfYears: 1, frequency: 1 });
  };

  handleChangeYears = (e) => {
    this.setState({ numberOfYears: e.target.value });
  };

  handleChangeFreqt = (e) => {
    this.setState({ frequency: e.target.value });
  };

  changeView = () => {
    this.setState({ calcView: 'true' });
  };

  render() {
    const result = Math.floor(
      (this.state.amount * 1.06) /
        ((this.state.numberOfYears * 12) / this.state.frequency)
    );
    if (this.state.calcView === 'false') {
      return (
        <div>
          <div className="containerinf">
            <div className="h1container">
              <h1>My Simulator</h1>
            </div>
            <label>Choose Loan Type</label>
            <div className="box">
              <select>
                <option>Car</option>
                <option>Home</option>
                <option>Studies</option>
              </select>
            </div>
            <label>Amount</label>
            <div className="box">
              <input
                className="amount"
                type="number"
                step="1000"
                placeholder="Type The Amount"
                value={this.state.amount}
                onChange={this.handleChangeAmount}
              ></input>
            </div>
            <label>Number Of Years</label>
            <div className="box">
              <input
                className="amount"
                type="number"
                placeholder="Number Of Years"
                value={this.state.numberOfYears}
                onChange={this.handleChangeYears}
              ></input>
            </div>
            <label>Repayment Frequency</label>
            <div className="box">
              <select
                value={this.state.frequency}
                onChange={this.handleChangeFreqt}
              >
                <option value="1">monthly</option>
                <option value="3">per quarter</option>
                <option value="6">per semester</option>
                <option value="12">yearly</option>
              </select>
            </div>
            <button className="calculate" onClick={this.changeView}>
              Calculate
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <SimulatorResult
          amount={this.state.amount}
          numyears={this.state.numberOfYears}
          frequency={this.state.frequency}
          calc={result}
        />
      );
    }
  }
}

export default Simulator;
