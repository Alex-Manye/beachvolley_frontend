import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import "../pages/Signup.css";

class Signup extends Component {
  state = { 
            teamName: "",
            email: "",
            password: "",
            playerName1: "",
            dniPlayer1: "", 
            playerName2: "",
            dniPlayer2: ""
          };

  handleFormSubmit = event => {
    event.preventDefault();
    const { teamName, email, password, playerName1, dniPlayer1, playerName2, dniPlayer2  } = this.state;
    this.props.signup({ teamName, email, password, playerName1, dniPlayer1, playerName2, dniPlayer2 });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { teamName, email, password, playerName1, dniPlayer1, playerName2, dniPlayer2 } = this.state;
    return (
      <div className="signup-container">
        <form onSubmit={this.handleFormSubmit}>

          <label>Team Name:</label>
          <input type="text" name="teamName" placeholder="Team Name" value={teamName} onChange={this.handleChange} />
        
          <label>email:</label>
          <input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />  

          <label>Name 1st player:</label>
          <input type="text" name="playerName1" placeholder="Name first player" value={playerName1} onChange={this.handleChange} />

          <label>DNI 1st player:</label>
          <input type="text" name="dniPlayer1" placeholder="DNI first player" value={dniPlayer1} onChange={this.handleChange} />

          <label>Name 2nd player:</label>
          <input type="text" name="playerName2" placeholder="Name second player" value={playerName2} onChange={this.handleChange} />

          <label>DNI 2nd player:</label>
          <input type="text" name="dniPlayer2" placeholder="DNI second player" value={dniPlayer2} onChange={this.handleChange} />

          <input className="signup-button" type="submit" value="Signup" /> 
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
