import React from 'react';
import './AthleteProfile.css';

function AthleteProfile({ athlete }) {
  return (
    <div className="athlete-profile">
      <img src={athlete.photo} alt={athlete.name} />
      <h3>{athlete.name}</h3>
      <p><strong>Biographie:</strong> {athlete.bio}</p>
      <p><strong>Palmarès:</strong> {athlete.achievements}</p>
    </div>
  );
}

export default AthleteProfile;
