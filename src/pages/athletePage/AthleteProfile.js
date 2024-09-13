import React from 'react';
import { useParams } from 'react-router-dom';
import './AthleteProfile.css';

const AthleteProfile = () => {
  const { id } = useParams();

  // Static data for athlete details
  const athletes = [
    {
      id: 1,
      name: 'Athlète 1',
      photo: '/images/athlete1.jpg',
      bio: 'Biographie de l\'athlète 1...',
      achievements: 'Palmarès de l\'athlète 1...',
      gallery: [
        { photo: '/images/gallery1.jpg', description: 'Description 1' },
        { photo: '/images/gallery2.jpg', description: 'Description 2' },
      ]
    },
    {
      id: 2,
      name: 'Athlète 2',
      photo: '/images/athlete2.jpg',
      bio: 'Biographie de l\'athlète 2...',
      achievements: 'Palmarès de l\'athlète 2...',
      gallery: [
        { photo: '/images/gallery3.jpg', description: 'Description 3' },
        { photo: '/images/gallery4.jpg', description: 'Description 4' },
      ]
    },
    // Add more athletes if needed
  ];

  const athlete = athletes.find((athlete) => athlete.id === parseInt(id));

  if (!athlete) {
    return <p>Athlete not found!</p>;
  }

  return (
    <div className="athlete-profile-page">
      <h2>{athlete.name}</h2>
      <img src={athlete.photo} alt={athlete.name} />
      <p><strong>Biography:</strong> {athlete.bio}</p>
      <p><strong>Achievements:</strong> {athlete.achievements}</p>
      <div className="gallery">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          {athlete.gallery.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.photo} alt={`Gallery item ${index + 1}`} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AthleteProfile;
