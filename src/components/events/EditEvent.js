import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import apiService from "../../services/events-api";
//import EventDetails from '.EventDetails/';


class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //title: theEvent viene de EventDetails? // Preguntar T.A.
        eventName: "", 
        id: "",
        //teams: this.props.theEvent.teams, 
        location: "", 
        day: "", 
        time: "", 
        description: "", 
      };
    }
    async componentDidMount() {
      const { id } = this.props.match.params;
      const {eventName,location, day, time, description} = await apiService.getOneEvent(id)
      this.setState({eventName, id, location, day, time, description })
      }
      

  handleFormSubmit = event => {
    event.preventDefault();
    const eventName = this.state.eventName; 
    const location = this.state.location;
    const id = this.state.id;
    const day = this.state.day;
    const time = this.state.time;
    const description = this.state.description;
    
    apiService.editOneEvent({eventName, location, id, day, time, description})
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