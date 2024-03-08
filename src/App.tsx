import React, { useState, useEffect } from 'react';
import './App.css';
//import json
import myData from './CollegeBasketballTeams.json';
//Set the interface structure
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}
//This function creates the heading
function Heading() {
  return (
    <div>
      <h1>All College Basketball Teams</h1>
    </div>
  );
}
//This function displays the json data
function TeamCard({ team }: { team: Team }) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}
//This function pulls in the json data
function TeamList() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setTeams(myData.teams); // Set the teams directly from imported JSON data
  }, []);

  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}
//This function displays the functions Heading and TeamList
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
