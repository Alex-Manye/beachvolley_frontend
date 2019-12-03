import React, { Component } from "react";
import { withAuth } from "../..//lib/AuthProvider";
import apiService from '../../services/events-api'
import { Link } from "react-router-dom";
import axios from "axios";
import AddEvent from "./AddEvent"; // <== !!!

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

 // usamos map() para enumerar los proyectos (no olvide dar a cada elemento
 // el ID de la base de datos como clave con key = {project.\_id});
  render() {
    const {listOfEvents} = this.state
    return (
      <div>
      <h2>Events</h2>
        <div>
          {listOfEvents.map(event => {
            return (
              <div key={event._id}>
                <Link to={`/events/${event._id}`}>
                  <h3>{event.eventName}</h3>
                </Link>
                
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(EventList);