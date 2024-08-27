import React from 'react';
import './GalleryPage.css';

function GalleryPage() {
  return (
    <div className="gallery-page">
      <h2>Galerie</h2>
      <div className="gallery">
        <img src="/images/gallery1.jpg" alt="Galerie 1" />
        <img src="/images/gallery2.jpg" alt="Galerie 2" />
        {/* Ajoutez plus d'images ici */}
      </div>
    </div>
  );
}

export default GalleryPage;
