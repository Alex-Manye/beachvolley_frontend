import React from 'react';
import {Link} from 'react-router-dom'
import "./EventCard.css";

function EventCard({event}) {
    return (
      <div className='tc grow shadow-5'>
        <div key={event._id}>
        <Link to={`/events/${event._id}`}>
          <h2>{event.eventName}</h2>
          <p>Location: {event.location}</p>
          <p>Day: {event.day}</p>
          <p>Time: {event.time}</p>
        </Link>
        </div>
      </div>

    )
}

export default EventCard;

{/* <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> */}