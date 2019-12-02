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

  //¿¿necesitariamos un getAllTeams y getAllEvents??
/* 
  getAllTeams = () => {
    axios.get(`http://localhost:4000/team/`)
    .then(responseFromApi => {
      this.setState({
        listOfTeams: responseFromApi.data
      });
    });
  }; */
  
/*   getAllEvents = () => {
    axios.get(`http://localhost:4000/events/`)
    .then(responseFromApi => {
      this.setState({
        listOfEvents: responseFromApi.data
      });
    });
  }; */

  //utilizamos el método componentDidMount() 
  //para obtener los datos de la API;
  async componentDidMount() {
    const listOfEvents= await apiService.getAllEvents()
    console.log(listOfEvents)
    this.setState({
      listOfEvents
    });
 /*    this.getAllTeams();
    this.getAllEvents(); */
  }

 // usamos map() para enumerar los proyectos (no olvide dar a cada elemento
 // el ID de la base de datos como clave con key = {project.\_id});
  render() {
    const {listOfEvents} = this.state
    return (
      <div>
      <h2>Events</h2>
        <div style={{ width: "60%", float: "left" }}>
          {listOfEvents.map(event => {
            return (
              <div key={event._id}>
                <Link to={`/events/${event._id}`}>
                  <h3>{event.eventName}</h3>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            );
          })}
        </div>
        {/* <div style={{ width: "40%", float: "right" }}>
          <AddEvent getData={() => this.getAllEvents()} /> 
        </div> */}
      </div>
    );
  }
}

export default withAuth(EventList);