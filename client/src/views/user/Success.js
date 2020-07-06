import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

class Success extends React.Component {
  state = {
    redirect: false,
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/userDashboard" />;
    }
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
          <h1 className="succh">
            Your Profile Informations Were Created Successfully
          </h1>
          <div className="contbuttsuccess">
            {this.renderRedirect()}
            <RaisedButton
              label="Go To My Dashboard"
              primary={true}
              style={styles.button}
              onClick={this.setRedirect}
            />
          </div>
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
