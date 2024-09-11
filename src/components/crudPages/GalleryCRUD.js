import React, { useState } from 'react';
import './GalleryCRUD.css'; // Import unique style for GalleryCRUD

const GalleryCRUD = () => {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const newImage = { id: images.length + 1, url: reader.result };
        setImages([...images, newImage]);
      };

      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="crud-wrapper">
      <h2>Gallery Management</h2>
      <div className="crud-form">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      {images.length > 0 ? (
        <table className="crud-list">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <tr key={image.id} className="list-item">
                <td>{image.id}</td>
                <td>
                  <img src={image.url} alt={`gallery-${image.id}`} />
                </td>
                <td>
                  <button onClick={() => deleteImage(image.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-list">No images uploaded yet.</div>
      )}
    </div>
  );
};

export default GalleryCRUD;
