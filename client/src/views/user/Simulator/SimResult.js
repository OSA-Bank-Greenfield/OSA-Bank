import React from 'react';
import './Simulator.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SimulatorResult = (props) => {
  return (
    <div>
      <h1>Simulation Result</h1>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Repayment period</th>
            <th scope="col">Nbre Deadlines</th>
            <th scope="col">Rate(%)</th>
            <th scope="col">Deadlines</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>{props.calc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SimulatorResult;
