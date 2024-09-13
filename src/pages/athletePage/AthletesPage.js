import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
import './AthletesPage.css';

const AthletesPage = () => {
  // Static data for athletes
  const athletes = [
    { id: 1, name: 'Athlète 1', photo: '/images/athlete1.jpg' },
    { id: 2, name: 'Athlète 2', photo: '/images/athlete2.jpg' },
    { id: 3, name: 'Athlète 3', photo: '/images/athlete3.jpg' },
    { id: 4, name: 'Athlète 4', photo: '/images/athlete4.jpg' },
    { id: 5, name: 'Athlète 5', photo: '/images/athlete5.jpg' },
    { id: 6, name: 'Athlète 6', photo: '/images/athlete6.jpg' },
    { id: 7, name: 'Athlète 7', photo: '/images/athlete7.jpg' },
    { id: 8, name: 'Athlète 8', photo: '/images/athlete8.jpg' },
    { id: 9, name: 'Athlète 9', photo: '/images/athlete9.jpg' },
    { id: 10, name: 'Athlète 10', photo: '/images/athlete10.jpg' },
    { id: 11, name: 'Athlète 11', photo: '/images/athlete11.jpg' },
    { id: 12, name: 'Athlète 12', photo: '/images/athlete12.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const athletesPerPage = 6;

  // Calculate the index of the first and last athlete on the current page
  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = athletes.slice(indexOfFirstAthlete, indexOfLastAthlete);

  const totalPages = Math.ceil(athletes.length / athletesPerPage);

  return (
    <div className="athletes-page">
      <h2>Nos Athlètes</h2>
      <div className="athletes-list">
        {currentAthletes.map((athlete) => (
          <Link
            key={athlete.id}
            to={`/athletes/${athlete.id}`}
            className="athlete-card"
          >
            <img src={athlete.photo} alt={athlete.name} />
            <h3>{athlete.name}</h3>
          </Link>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={athletesPerPage}
        total={athletes.length}
        onChange={(page) => setCurrentPage(page)}
        className="pagination"
      />
    </div>
  );
};

export default AthletesPage;
