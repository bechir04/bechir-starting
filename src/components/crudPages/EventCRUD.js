import React, { useState } from 'react';
import './CRUD.css'; // Import the common CRUD styles


const EventCRUD = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");

  const addEvent = () => {
    const newEvent = { id: events.length + 1, name: eventName };
    setEvents([...events, newEvent]);
    setEventName("");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div>
      <h2>Event Management</h2>
      <div>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name"
        />
        <button onClick={addEvent}>Add Event</button>
      </div>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name}
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCRUD;
