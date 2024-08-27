// AthleteProfile.js
import React from 'react';
import './AthleteProfile.css'; // Make sure this path is correct

const AthleteProfile = ({ name, image, bio, achievements }) => {
  return (
    <div className="athlete-profile">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <p>{achievements}</p>
    </div>
  );
};

export default AthleteProfile;
