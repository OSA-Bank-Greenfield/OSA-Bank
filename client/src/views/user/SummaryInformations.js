import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';
import axios from 'axios';

class SummaryInformations extends React.Component {
  continue = () => {
    // e.preventDefault();
    // console.log('test');
    this.props.nextStep();
  };

  back = () => {
    // e.preventDefault();
    this.props.prevStep();
  };

  sendInf = () => {
    axios
      .post('http://localhost:5000/userinformations', this.props.values)
      .then((response) => {
        // console.log('here');
        this.continue();
      })
      .catch((err) => console.log('Error', err));
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        username,
        occupation,
        state,
        city,
        zipcode,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Summary Informations" style={styles.barColor}></AppBar>
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Username" secondaryText={username} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="State" secondaryText={state} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Zip Code" secondaryText={zipcode} />
          </List>
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.sendInf}
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
export default SummaryInformations;
