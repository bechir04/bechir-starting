import React, { useState } from 'react';
import './CRUD.css'; // Import the common CRUD styles


const AthleteCRUD = () => {
  const [athletes, setAthletes] = useState([]);
  const [name, setName] = useState("");

  const addAthlete = () => {
    const newAthlete = { id: athletes.length + 1, name };
    setAthletes([...athletes, newAthlete]);
    setName("");
  };

  const deleteAthlete = (id) => {
    setAthletes(athletes.filter(athlete => athlete.id !== id));
  };

  return (
    <div>
      <h2>Athlete Management</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter athlete name"
        />
        <button onClick={addAthlete}>Add Athlete</button>
      </div>
      <ul>
        {athletes.map(athlete => (
          <li key={athlete.id}>
            {athlete.name}
            <button onClick={() => deleteAthlete(athlete.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AthleteCRUD;
