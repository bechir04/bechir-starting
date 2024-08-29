import React, { useState } from 'react';
import './ManageCarousel.css';

const ManageCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([
    // Sample data for carousel items
    { id: 1, title: 'Event 1', image: '/images/event1.jpg', description: 'Description for event 1' },
    { id: 2, title: 'Event 2', image: '/images/event2.jpg', description: 'Description for event 2' }
  ]);

  const [newItem, setNewItem] = useState({
    title: '',
    image: '',
    description: ''
  });

  const handleAddItem = () => {
    if (newItem.title && newItem.image && newItem.description) {
      setCarouselItems([...carouselItems, { ...newItem, id: carouselItems.length + 1 }]);
      setNewItem({ title: '', image: '', description: '' });
    }
  };

  const handleDeleteItem = (id) => {
    setCarouselItems(carouselItems.filter(item => item.id !== id));
  };

  return (
    <div className="manage-carousel-container">
      <h1 className="manage-carousel-header">Manage Carousel</h1>
      
      <div className="carousel-form">
        <h2>Add New Carousel Item</h2>
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
        <textarea
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ul className="carousel-list">
        {carouselItems.map(item => (
          <li key={item.id} className="carousel-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCarousel;
