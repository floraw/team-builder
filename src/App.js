import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./components/Form";
import TeamList from "./components/TeamList"; 

function App() {

  const [members, setMember] = useState([
    {
      id: 1,
      name: "Flora Winters",
      role: "Girl-boss",
      email: "flora.e.winters@gmail.com"
    }
  ]);

  const addNewMember = member => {
    const newMember = setMember([...members, member]);
  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <TeamList members={member} />
    </div>
  );
}

export default App;
