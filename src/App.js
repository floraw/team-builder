import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";
import TeamList from "./components/TeamList"; 

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Flora Winters",
      role: "Girl-boss",
      email: "flora.e.winters@gmail.com"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <TeamList members={members} />
    </div>
  );
}

export default App;
