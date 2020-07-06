import React, { Component } from 'react';
import '../Authentication/Authentication.css';
import axios from "axios"
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
   
      email: "",
      password: "",
    
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
   
      const userData = {
        email: this.state.email,
        password: this.state.password,  
      };
      axios.post(`/auth/login`, userData).then((res) => {
        alert("welcome to our website");
      });
    
  }
 

  render() {
    return (
      <div className="auth-container">
        <form>
          <h3>Login</h3>

          <div className="form-group">
            <label>Email Address</label>
            <input
              id = "email"
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
             id ="password"
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              onChange={this.handleChange}
              required
            ></input>
          </div>

         
          <div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              
             onClick={this.handleSubmit} // onClick={this.setRedirect}
            >
             Login
                         </button>
          </div>
          
        </form>
      </div>
    );
  }
}

export default Login;
