import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';


const navbar = (props) => {

  return (
    <nav className="nav-style">

        {props.isLoggedin ? (
          <ul>
        <li>
          <Link to="/events" className="navbarlink" style={{ textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/addevent" className="navbarlink" style={{ textDecoration: "none" }}>Add event</Link>
        </li>
        <li>
          <Link to="/profile" className="navbarlink" style={{ textDecoration: "none" }}>My profile</Link>
        </li>
        <li>
          <button onClick={props.logout} >Logout</button> 
        </li>
        </ul>     

        ): (
      <ul>
        <li>
          <Link to="/signup" className="navbarlink" style={{ textDecoration: "none" }}>SignUp</Link>
        </li>
        <li>
          <Link to="/login" className="navbarlink" style={{ textDecoration: "none" }}>LogIn</Link>
        </li>
      </ul>
        )}
    </nav>
  );
};

export default withAuth(navbar);