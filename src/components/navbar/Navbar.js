import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';


const navbar = (props) => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/addevent" className="navbarlink" style={{ textDecoration: "none" }}>Add event</Link>
          <Link to="/profile" className="navbarlink" style={{ textDecoration: "none" }}>My profile</Link>
          <Link to="/login" className="navbarlink" style={{ textDecoration: "none" }}>logout</Link>          
        </li>
        {props.isLoggedin ? <button onClick={props.logout} >Logout</button> : null }
      </ul>
    </nav>
  );
};

export default withAuth(navbar);