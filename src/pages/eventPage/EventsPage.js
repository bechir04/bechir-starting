import React from 'react';
import EventCalendar from '../../components/eventCalendar/EventCalendar';
import './EventsPage.css';

function EventsPage() {
  const events = [
    { title: 'Événement 1', date: '10/02/2024', location: 'Lieu 1', description: 'Description de l\'événement 1...' },
    { title: 'Événement 2', date: '15/03/2024', location: 'Lieu 2', description: 'Description de l\'événement 2...' },
  ];

  return (
    <div className="events-page">
      <h2>Événements à Venir</h2>
      <EventCalendar events={events} />
    </div>
  );
}

export default EventsPage;
