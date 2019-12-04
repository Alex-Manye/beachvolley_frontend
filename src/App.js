import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
//import AddProject from './components/projects/AddProject';
import EventList from "./components/events/EventList";
import Navbar from "./components/navbar/Navbar";
import EventDetails from "./components/events/EventDetails";
import AddEvent from "./components/events/AddEvent";
import EditEvent from "./components/events/EditEvent";
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll.js';

import Signup from './pages/Signup';		//		<--	Import 
import Login from './pages/Login';			//		<--	Import 
import Private from './pages/Private';	//		<--	Import 
import AuthProvider from "./lib/AuthProvider";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";


class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Wrap components with AuthProvider, para que puedan ser consumers       */}
       
      <div className="container">
        <Navbar />
        <div>
          <h1>Beach volley tournament App</h1>

        </div>
        <Switch>
          {/* <Route path="/" exact component={Index} /> */}
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/private" component={Private} />
          {/* <PrivateRoute path="/myprofile" exact component={MyProfile} /> */}
          <PrivateRoute exact path="/events/:id" component={EventDetails} />
          <Route exact path="/events" component={EventList} />
          <PrivateRoute exact path="/addevent" component={AddEvent} />
          {/* <PrivateRoute exact path="/joinevent" component={JoinEvent} /> */}
          <PrivateRoute exact path="/events/:id/edit" component={EditEvent} />

        </Switch>
      </div>
      
    </AuthProvider>       //       <---  Wrap components with AuthProvider 

    );
  }
}

export default App;

