import React, { useState } from 'react';
import './ManageGallery.css';

const ManageGallery = () => {
  const [galleryItems, setGalleryItems] = useState([
    // Sample data for gallery items
    { id: 1, title: 'Event 1', image: '/images/gallery1.jpg' },
    { id: 2, title: 'Event 2', image: '/images/gallery2.jpg' }
  ]);

  const [newItem, setNewItem] = useState({
    title: '',
    image: ''
  });

  const handleAddItem = () => {
    if (newItem.title && newItem.image) {
      setGalleryItems([...galleryItems, { ...newItem, id: galleryItems.length + 1 }]);
      setNewItem({ title: '', image: '' });
    }
  };

  const handleDeleteItem = (id) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
  };

  return (
    <div className="manage-gallery-container">
      <h1 className="manage-gallery-header">Manage Gallery</h1>
      
      <div className="gallery-form">
        <h2>Add New Gallery Item</h2>
        <input
          type="text"
          placeholder="Title"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ul className="gallery-list">
        {galleryItems.map(item => (
          <li key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageGallery;
