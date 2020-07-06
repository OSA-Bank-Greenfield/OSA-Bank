import React, { Component } from "react";
import "../Authentication/Authentication.css";
import UserForm from "../UserForm";
import { Redirect } from "react-router-dom";
import axios from "axios";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectLogin: false,
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
        email: this.state.email,
        password: this.state.password,
      };
      console.log(userData);
      axios.post(`/auth/register`, userData).then((res) => {
        alert("welcome to our website");
      });
    } else {
      alert("confirm your passwword");
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/userForm" />;
    }
  };
  setRedirectLogin = () => {
    this.setState({
      redirectLogin: true,
    });
  };
  renderRedirectLogin = () => {
    if (this.state.redirectLogin) {
      return <Redirect to="/login" />;
    }
  };
  // state = {
  //   formView: 'false',
  // };
  // toFormView = () => {
  //   this.setState({ formView: 'true' });
  // };
  render() {
    return (
      <div className="auth-container">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              onChange={this.handleChange}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              onChange={this.handleChange}
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Password Confirmation</label>
            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Your Password"
              onChange={this.handleChange}
              required
            ></input>
          </div>
          <div>
            {this.renderRedirect()}
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.handleSubmit} // onClick={this.setRedirect}
            >
              Sign Up
            </button>
          </div>
          <div>
            <p className="forgot-password text-right">
              {this.renderRedirectLogin()}
              Already registered <a onClick={this.setRedirectLogin}>sign in?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
