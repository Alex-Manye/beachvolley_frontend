import React, { Component } from "react";
import axios from "axios";
//import EventDetails from '.EventDetails/';
//import events-api from './../../services/events-api';

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //title: theEvent viene de EventDetails? // Preguntar T.A.
        eventName: this.props.theEvent.eventName, 
        teams: this.props.theEvent.teams, 
        location: this.props.theEvent.location, 
        day: this.props.theEvent.day, 
        time: this.props.theEvent.time, 
        description: this.props.theEvent.description, 
      };
    }

  handleFormSubmit = event => {
    event.preventDefault();
    const eventName = this.state.eventName;
    const teams = this.state.teams;  //Hace falta? preguntar T.A.
    const location = this.state.location;
    const day = this.state.day;
    const time = this.state.time;
    const description = this.state.description;

    axios
      .put(`http://localhost:4000/projects/${this.props.theEvent._id}`, {
        eventName, teams, location, day, time, description
      })
      .then(() => {
        this.props.getTheProject();
        // after submitting the form, redirect to '/events'
        this.props.history.push("/events");
      })
      .catch(error => console.log(error));
  };

  handleChangeEventName = event => {
    this.setState({
      eventName: event.target.value
    });
  };

  handleChangeLocation = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleChangeDay = event => {
    this.setState({
      day: event.target.value
    });
  };

  handleChangeTime = event => {
    this.setState({
      time: event.target.value
    });
  };

  handleChangeDescription = event => {
    this.setState({
      description: event.target.value
    });
  };
 
  render() {
    return (
      <div>
        <hr />
        <h3>Edit Event</h3>
        <form onSubmit={this.handleFormSubmit}>
        <label>EventName:</label>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={e => this.handleChangeEventName(e)}
          />
          <label>Location:</label>
          <textarea
            name="location"
            value={this.state.location}
            onChange={e => this.handleChangeLocation(e)}
          />
          <label>Day:</label>
          <textarea
            name="day"
            value={this.state.day}
            onChange={e => this.handleChangeDay(e)}
          />
          <label>Time:</label>
          <textarea
            name="time"
            value={this.state.time}
            onChange={e => this.handleChangeTime(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChangeDescription(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditEvent;