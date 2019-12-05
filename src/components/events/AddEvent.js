import React, { Component } from "react";
import axios from "axios";
import apiService from "../../services/events-api";
import "./AddEvent.css";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventName: "", 
      location: "",
      day: "",
      time: "",
      description: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const eventName = this.state.eventName;
    const location = this.state.location;
    const day = this.state.day;
    const time = this.state.time;
    const description = this.state.description;


    apiService.addOneEvent({eventName, location, day, time, description})

    this.setState({
      eventName: "", 
      location: "",
      day: "",
      time: "",
      description: ""
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
      <h2>Add a sport event</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>EventName:</label>
          <input
            type="text"
            name="eventName"
            placeholder="eventName"
            value={this.state.eventName}
            onChange={e => this.handleChange(e)}
          />
          <label>Location:</label>
          <textarea
            name="location"
            placeholder="Location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}
          />
          <label>Day:</label>
          <textarea
            name="day"
            placeholder="Day"
            value={this.state.day}
            onChange={e => this.handleChange(e)}
          />
          <label>Time:</label>
          <textarea
            name="time"
            placeholder="Time"
            value={this.state.time}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;