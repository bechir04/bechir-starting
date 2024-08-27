import React from 'react';
import AthleteProfile from '../../components/AthleteProfile/AthleteProfile';
import './AthletesPage.css';

function AthletesPage() {
  const athletes = [
    { name: 'Athlète 1', bio: 'Biographie...', achievements: 'Palmarès...', photo: '/images/athlete1.jpg' },
    { name: 'Athlète 2', bio: 'Biographie...', achievements: 'Palmarès...', photo: '/images/athlete2.jpg' },
  ];

  return (
    <div className="athletes-page">
      <h2>Nos Athlètes</h2>
      <div className="athletes-list">
        {athletes.map((athlete, index) => (
          <AthleteProfile key={index} athlete={athlete} />
        ))}
      </div>
    </div>
  );
}

export default AthletesPage;
