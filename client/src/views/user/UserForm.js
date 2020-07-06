import React from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import SummaryInformations from './SummaryInformations';
import Success from './Success';

class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    username: '',
    occupation: '',
    state: '',
    city: '',
    zipcode: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Proceed to next step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      username,
      occupation,
      state,
      city,
      zipcode,
    } = this.state;
    const values = {
      firstName,
      lastName,
      username,
      occupation,
      state,
      city,
      zipcode,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <SummaryInformations
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
    }
  }
}

export default UserForm;
