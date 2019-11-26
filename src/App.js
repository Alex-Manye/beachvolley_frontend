import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
//import AddProject from './components/projects/AddProject';
import EventList from "./components/events/EventList";
import Navbar from "./components/navbar/Navbar";
import EventDetails from "./components/events/EventDetails";
import AddEvent from "./components/events/AddEvent";

import Signup from './pages/Signup';		//		<--	Import 
import Login from './pages/Login';			//		<--	Import 
import Private from './pages/Private';	//		<--	Import 
import AuthProvider from "./lib/AuthProvider";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";


/*
vemos que el componente `<AddProject />` estará realmente anidado dentro de `<ProjectList />`, así que vamos y elimínelo de App.js y también dejemos de comentar this.props.getData() dentro de `<AddProject />`;
*/

class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Wrap components with AuthProvider, para que puedan ser consumers       */}
       
      <div className="container">
        <Navbar />
        <Switch>
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <PrivateRoute exact path="/events" component={EventList} />
          <PrivateRoute exact path="/events/add" component={AddEvent} />
          <PrivateRoute exact path="/events/:id" component={EventDetails} />

        </Switch>
      </div>
      
    </AuthProvider>       //       <---  Wrap components with AuthProvider 

    );
  }
}

export default App;

