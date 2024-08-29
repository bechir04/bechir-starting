import React, { useState } from 'react';
import './ManageMembership.css';

const ManageMembership = () => {
  const [memberships, setMemberships] = useState([
    // Sample data for membership types
    { id: 1, type: 'Standard', price: '50$', description: 'Basic membership with limited benefits.' },
    { id: 2, type: 'Premium', price: '100$', description: 'Full membership with all benefits.' }
  ]);

  const [newMembership, setNewMembership] = useState({
    type: '',
    price: '',
    description: ''
  });

  const handleAddMembership = () => {
    if (newMembership.type && newMembership.price && newMembership.description) {
      setMemberships([...memberships, { ...newMembership, id: memberships.length + 1 }]);
      setNewMembership({ type: '', price: '', description: '' });
    }
  };

  const handleDeleteMembership = (id) => {
    setMemberships(memberships.filter(membership => membership.id !== id));
  };

  return (
    <div className="manage-membership-container">
      <h1 className="manage-membership-header">Manage Memberships</h1>
      
      <div className="membership-form">
        <h2>Add New Membership</h2>
        <input
          type="text"
          placeholder="Type"
          value={newMembership.type}
          onChange={(e) => setNewMembership({ ...newMembership, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newMembership.price}
          onChange={(e) => setNewMembership({ ...newMembership, price: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMembership.description}
          onChange={(e) => setNewMembership({ ...newMembership, description: e.target.value })}
        />
        <button onClick={handleAddMembership}>Add Membership</button>
      </div>

      <ul className="membership-list">
        {memberships.map(membership => (
          <li key={membership.id} className="membership-item">
            <h3>{membership.type}</h3>
            <p>Price: {membership.price}</p>
            <p>{membership.description}</p>
            <button onClick={() => handleDeleteMembership(membership.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMembership;
