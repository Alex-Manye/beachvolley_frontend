import React from 'react';
import {Link} from 'react-router-dom'

function EventCard({event}) {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div key={event._id}>
        <Link to={`/events/${event._id}`}>
          <h3>{event.eventName}</h3>
          <p>{event.location}</p>
          <p>{event.day}</p>
          <p>{event.time}</p>
        </Link>
        </div>
      </div>

    )
}

export default EventCard;