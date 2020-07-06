import React from 'react';
import './general.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';
import UserDashboard from './userDashboard';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core';

class DashboardProfileInformations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: '',
      lastName: '',
      username: '',
      occupation: '',
      state: '',
      city: '',
      zipcode: '',
    };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/userinformations')
      .then((response) => {
        this.setState({
          users: response.data,
        });
        this.setState({
          firstName: this.state.users[0].firstName,
          lastName: this.state.users[0].lastName,
          username: this.state.users[0].username,
          occupation: this.state.users[0].occupation,
          state: this.state.users[0].state,
          city: this.state.users[0].city,
          zipcode: this.state.users[0].zipcode,
        });
        console.log(this.state.users[0].firstName);
        // console.log(this.state.classesList);
      })

      .catch((err) => console.log('Error', err));
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="containerinf">
        <MuiThemeProvider>
          <React.Fragment>
            <div className="h1container">
              <h1>My Personal Informations</h1>
            </div>
            <hr></hr>
            <List>
              <ListItem
                primaryText="First Name"
                secondaryText={this.state.firstName}
              />
              <ListItem
                primaryText="Last Name"
                secondaryText={this.state.lastName}
              />
              <ListItem
                primaryText="Username"
                secondaryText={this.state.username}
              />
              <ListItem
                primaryText="Occupation"
                secondaryText={this.state.occupation}
              />
              <ListItem primaryText="State" secondaryText={this.state.state} />
              <ListItem primaryText="City" secondaryText={this.state.city} />
              <ListItem
                primaryText="Zip Code"
                secondaryText={this.state.zipcode}
              />
            </List>
            <br />
            <RaisedButton
              label="Edit"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label="Save"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
  barColor: { background: '#2E3B55' },
};
export default DashboardProfileInformations;
