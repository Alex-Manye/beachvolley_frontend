import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import './login.css'

class Login extends Component {
  state = { teamName: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { teamName, password } = this.state;
    // console.log('Login -> form submit', { teamName, password });
    this.props.login({ teamName, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div >
      <form className="formu" onSubmit={this.handleFormSubmit}>
        
         <label>email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />  


        <input type="submit" value="Login" />
      </form>
      </div>
    );
  }
}

export default withAuth(Login);
