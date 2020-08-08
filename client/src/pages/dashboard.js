import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Tasks: </p>
      <ul>
        <li>Show how many quiz are there</li>
        <li>Add Links for each task</li>
        <li>Add The Authentication Part as the last part</li>
        <li>Show all the participants result to finish</li>
      </ul>
      <p>Links:</p>
      <ul>
        <li>
          <Link to="/add-participant">Add New Participant</Link>
        </li>
        <li>
          <Link to="/add-quiz">Add New Quiz</Link>
        </li>
      </ul>
    </div>
  );
}
