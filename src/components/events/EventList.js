import React, { Component } from "react";
import { withAuth } from "../..//lib/AuthProvider";
import apiService from '../../services/events-api'
import { Link } from "react-router-dom";
import axios from "axios";
import AddEvent from "./AddEvent"; // <== !!!
import "./EventList.css";
import EventCard from "./EventCard";

class EventList extends Component {
  constructor() {
    super();
    this.state = { listOfEvents: [] };
  }

  //utilizamos el método componentDidMount() 
  //para obtener los datos de la API;
  async componentDidMount() {
    const listOfEvents= await apiService.getAllEvents()
    console.log(listOfEvents)
    this.setState({listOfEvents});

  }

 // usamos map() para enumerar los proyectos (no olvide dar a cada elemento el ID de la base de datos como clave con key = {project.\_id});
  render() {

    const {listOfEvents} = this.state
    return (
      <div className="eventcard">
      <h2>Beach Volley events</h2>
        <div>
          {listOfEvents.map(event => {
            return (
              <EventCard event={event}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(EventList);