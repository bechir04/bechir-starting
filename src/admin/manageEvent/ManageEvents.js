import React, { useState } from 'react';
import './ManageEvents.css';

const ManageEvents = () => {
  const [events, setEvents] = useState([
    // Sample data for events
    { id: 1, title: 'Event 1', date: '2024-01-01', location: 'Stadium A', description: 'Description for event 1' },
    { id: 2, title: 'Event 2', date: '2024-02-01', location: 'Stadium B', description: 'Description for event 2' }
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.description) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: '', date: '', location: '', description: '' });
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="manage-events">
      <h1 className="manage-events-header">Manage Events</h1>
      
      <div className="events-form">
        <h2>Add New Event</h2>
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <ul className="events-list">
        {events.map(event => (
          <li key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEvents;
