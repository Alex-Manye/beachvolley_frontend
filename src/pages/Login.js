import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import './login.css'

class Login extends Component {
  state = { teamName: "", email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { teamName, email, password } = this.state;
    console.log("email: " + email)
    this.props.login({ teamName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, teamName, password } = this.state;

    return (
      <div >
      <form className="formu" onSubmit={this.handleFormSubmit}>
        <label>Team Name: </label>
        <input type="text" name="teamName" value={teamName} placeholder="team Name" onChange={this.handleChange} />
        
         <label>email:</label>
          <input type="email" name="email" value={email} placeholder="email" onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />  


        <input className="login-button" type="submit" value="Login" />
      </form>
      </div>
    );
  }
}

export default withAuth(Login);

