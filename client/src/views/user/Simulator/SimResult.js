import React from 'react';
import './Simulator.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SimulatorResult = (props) => {
  return (
    <div>
      <div className="h1container">
        <h1>Simulation Result</h1>
      </div>
      <div className="conttable">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Amount</th>
              <th scope="col">Repayment period</th>
              <th scope="col">Number of Years</th>
              <th scope="col">Rate(%)</th>
              <th scope="col">Deadlines</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.amount}</td>
              <td>{props.frequency}</td>
              <td>{props.numyears}</td>
              <td>6 %</td>
              <td>
                <span>{props.calc} TND</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimulatorResult;
