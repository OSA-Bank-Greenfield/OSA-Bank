import React from "react";
import axios from "axios";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState({ [event.target.id]: value });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      const userData = {

        
        email: this.state.mail,
        password: this.state.password,
        
      };
      axios.post(`http://localhost:5000/auth/register`, userData).then((res) => {
        alert("welcome to our website");
      });
    } else {
      alert("confirm your passwword");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         firstname
          <input
            type="text"
            id="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          lastname
          <input
            type="text"
            id="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <br />
        <label>
          E-mail
          <input
            type="text"
            id="mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          Password
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          Confirm Password
          <input
            type="password"
            id="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SignUp;
