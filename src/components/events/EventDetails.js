import React, { Component } from "react";
import apiService from "../../services/events-api";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import EditEvent from "./EditEvent";
import axios from "axios";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { theEvent: {}, hasJoined: false };
  }
  //componentDidMount() está ejecutando el método getSingleEvent()
  //que inicialmente se comunica con nuestra ruta de back-end a través de la llamada axios.
  async componentDidMount() {
    const { id } = this.props.match.params;
    const theEvent = await apiService.getOneEvent(id);
    this.setState({ theEvent });
  }

  getOneEvent = () => {
    axios
      //.get(`http://localhost:4000/events/${params.id}`)
      .then(responseFromApi => {
        const theEvent = responseFromApi.data;
        this.setState(theEvent);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.eventName) {
      this.getSingleEvent();
    } else {
      return (
        <EditEvent
          theEvent={this.state}
          getTheEvent={this.getOneEvent}
          {...this.props}
        />
      );
    }
  };

  // DELETE EVENT: ¿El owner?
  deleteEvent = () => {
    const { id } = this.props.match.params;
    apiService
      .deleteOneEvent(id)
      .then(() => {
        this.props.history.push("/events");
      })
      .catch(err => {
        console.log(err);
      });
  };

  //JOIN EVENT
  addUserToEvent = () => {
    const userId = this.props.user._id;
    const eventId = this.props.match.params.id;
    console.log("EventId", userId);
    console.log("UserId", eventId);

    apiService.joinOneEvent(userId, eventId);
    this.setState({
      hasJoined: true
    });
  };

  render() {
    const { theEvent } = this.state;
    return (
      <div>
        <h2>Event Details</h2>
        <h1>{theEvent.eventName}</h1>
        <p>{theEvent.location}</p>
        <p>{theEvent.day}</p>
        <p>{theEvent.time}</p>
        <p>{theEvent.description}</p>
        {/*           <div>{this.renderEditForm()} </div> */}
        <button onClick={() => this.deleteEvent()}>Delete Event</button>
        <br />
        <Link to={`/events/${theEvent._id}/edit`}>Edit</Link>
        <br />
        {this.state.hasJoined ? (
          <button disabled onClick={() => this.addUserToEvent()}>JOINED!!!</button>
        ) : (
          <button onClick={() => this.addUserToEvent()}>Join event</button>
        )}
        <br />
        <Link to={"/events"}>Back to events</Link>
      </div>
    );
  }
}

export default withAuth(EventDetails);

/*
Se llama al método renderEditForm() dentro del método render() y lo que hace es básicamente esto: comprueba si this.state tiene alguna propiedad (elegimos el título), y si eso es cierto, invoca el método getSingleProject() que obtiene el objeto project de nuestra API y lo establece en el estado del componente. En la próxima ejecución de renderEditForm(), está renderizando el componente `<EditProject />` con props pasados ​​a sí mismo. Aquí podemos ver que lo que se está pasando es theProject, que es realmente EL project que estamos viendo en esta página de detalles y estamos pasando el método getSingleProject() como props getTheProject. Ahora, si miras hacia atrás a nuestro componente `<EditProject />`, todo tiene más sentido, ¿verdad?

*/
