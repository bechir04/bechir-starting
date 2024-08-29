import React, { useState } from 'react';
import './ManageContact.css';

const ManageContact = () => {
  const [contacts, setContacts] = useState([
    // Sample data for contact information
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleAddContact = () => {
    if (newContact.name && newContact.email && newContact.phone) {
      setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
      setNewContact({ name: '', email: '', phone: '' });
    }
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="manage-contact-container">
      <h1 className="manage-contact-header">Manage Contact Information</h1>
      
      <div className="contact-form">
        <h2>Add New Contact</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleChange}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>

      <ul className="contact-list">
        {contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageContact;
