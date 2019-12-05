import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';


const navbar = (props) => {

  return (
    <nav className="nav-style">

        {props.isLoggedin ? (
      <container className="nav2">
      <nav className="navbar navbar-expand-lg navbar-dark bg-29374E navStyle"></nav> 
          <ul>
        <div className="nav3">
        <li>
          <Link to="/events" className="navbarlink" style={{ textDecoration: "none" }}>Sport events</Link>
        </li>
        </div>
        <div className="nav3">
        <li>
          <Link to="/addevent" className="navbarlink" style={{ textDecoration: "none" }}>Add event</Link>
        </li>
        </div>
        <div className="nav3">
        <li>
          <Link to="/profile" className="navbarlink" style={{ textDecoration: "none" }}>My profile</Link>
        </li>
        </div>
        <div className="nav3">
        <li>
          <button onClick={props.logout} >Logout</button> 
        </li>
        </div>
        </ul>     
      </container>
        ): (
      <container className="nav2"> 
      <ul>
        <li>
          <Link to="/signup" className="navbarlink" style={{ textDecoration: "none" }}>SignUp</Link>
        </li>
        <li>
          <Link to="/login" className="navbarlink" style={{ textDecoration: "none" }}>LogIn</Link>
        </li>
      </ul>
      </container>
        )}
    </nav>
  );
};

export default withAuth(navbar);