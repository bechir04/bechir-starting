import React, { useState } from 'react';
import { Pagination } from 'antd';
import './EventsPage.css';

const EventsPage = () => {
  // List of events for testing pagination
  const allEvents = [
    { title: 'Événement 1', date: '10/02/2024', location: 'Lieu 1', description: 'Description de l\'événement 1...', image: '/images/event1.jpg' },
    { title: 'Événement 2', date: '15/03/2024', location: 'Lieu 2', description: 'Description de l\'événement 2...', image: '/images/event2.jpg' },
    { title: 'Événement 3', date: '20/04/2024', location: 'Lieu 3', description: 'Description de l\'événement 3...', image: '/images/event3.jpg' },
    { title: 'Événement 4', date: '25/05/2024', location: 'Lieu 4', description: 'Description de l\'événement 4...', image: '/images/event4.jpg' },
    { title: 'Événement 5', date: '30/06/2024', location: 'Lieu 5', description: 'Description de l\'événement 5...', image: '/images/event5.jpg' },
    { title: 'Événement 6', date: '05/07/2024', location: 'Lieu 6', description: 'Description de l\'événement 6...', image: '/images/event6.jpg' },
    { title: 'Événement 7', date: '10/08/2024', location: 'Lieu 7', description: 'Description de l\'événement 7...', image: '/images/event7.jpg' },
    { title: 'Événement 8', date: '15/09/2024', location: 'Lieu 8', description: 'Description de l\'événement 8...', image: '/images/event8.jpg' },
    { title: 'Événement 9', date: '20/10/2024', location: 'Lieu 9', description: 'Description de l\'événement 9...', image: '/images/event9.jpg' },
    { title: 'Événement 10', date: '25/11/2024', location: 'Lieu 10', description: 'Description de l\'événement 10...', image: '/images/event10.jpg' },
    { title: 'Événement 11', date: '30/12/2024', location: 'Lieu 11', description: 'Description de l\'événement 11...', image: '/images/event11.jpg' },
    { title: 'Événement 12', date: '05/01/2025', location: 'Lieu 12', description: 'Description de l\'événement 12...', image: '/images/event12.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of events per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedEvents = allEvents.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="events-page">
      <h2>Événements à Venir</h2>
      <div className="events-list">
        {paginatedEvents.map((event, index) => (
          <div className="event" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={allEvents.length}
        onChange={handlePageChange}
        className="pagination"
      />
    </div>
  );
};

export default EventsPage;
