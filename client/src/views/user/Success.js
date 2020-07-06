import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import axios from 'axios';

class Success extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  // sendInf = () => {
  //   axios
  //     .post('http://localhost:5000/userinformations', this.props.values)
  //     .then((response) => {
  //       console.log(response.data);
  //     })

  //     .catch((err) => console.log('Error', err));
  // };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" style={styles.barColor} />
          <h1>Your Profile Informations Were Updated Successfully</h1>
          <RaisedButton
            label="Go To My Dashboard"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
  barColor: { background: '#2E3B55' },
};
export default Success;
