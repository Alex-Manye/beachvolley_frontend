import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';


const navbar = (props) => {
console.log(props.isLoggedin)
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/events" style={{ textDecoration: "none" }}>Events</Link>
          <Link to="/teams" style={{ textDecoration: "none" }}>Teams</Link>
          
        </li>
        {props.isLoggedin ? <button onClick={props.logout} >Logout</button> : null }
      </ul>
    </nav>
  );
};

export default withAuth(navbar);







/*
class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;
    return (
      <div style={{ borderRadius: '5px', padding: '20px', background: '#686de0'}}>
        {
          // si el usuario está logueado, muestra el username y el botón Logout, sino muestra los botones de Login y Signup
          isLoggedin ? 
          (<div>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>) 
         : 
          (<div>
            <Link to="/login"> <button>Login</button> </Link>
            <br/>
            <Link to="/signup"> <button>Signup</button> </Link>
            <Link to="/signup"> <button>Events</button> </Link>
          </div>)
        }
      </div>
    );
  }
}

export default withAuth(Navbar); */