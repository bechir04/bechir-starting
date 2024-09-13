import React from 'react';
import './Gallery.css'; // Ensure this file exists and contains appropriate styles

const Gallery = ({ athlete }) => {
  const galleryItems = athlete?.gallery || [];

  return (
    <div className="gallery">
      <h3>Gallery for {athlete?.name}</h3>
      <div className="gallery-grid">
        {galleryItems.length > 0 ? (
          galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.photo} alt={`Gallery item ${index + 1}`} />
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No gallery items available.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
