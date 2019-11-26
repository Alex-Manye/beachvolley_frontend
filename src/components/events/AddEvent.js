import React, { Component } from "react";
import axios from "axios";

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
    console.log("holaa")
    const eventName = this.state.eventName;
    const location = this.state.location;
    const day = this.state.day;
    const time = this.state.time;
    const description = this.state.description;


    axios
      .post("http://localhost:4000/event/add", 
      { eventName, location, day, time, description })
      .then(() => {
        this.props.getData();
        this.setState({ 
          eventName: "", 
          location: "",
          day: "",
          time: "",
          description: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>EventName:</label>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={e => this.handleChange(e)}
          />
          <label>Location:</label>
          <textarea
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}
          />
          <label>Day:</label>
          <textarea
            name="day"
            value={this.state.day}
            onChange={e => this.handleChange(e)}
          />
          <label>Time:</label>
          <textarea
            name="time"
            value={this.state.time}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;