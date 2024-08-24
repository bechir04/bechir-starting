import React from 'react';
import './EventCalendar.css';

function EventCalendar({ events }) {
  return (
    <div className="event-calendar">
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <h4>{event.title}</h4>
          <p>{event.date} - {event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventCalendar;
