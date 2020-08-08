import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="navbar-section mb-5">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Quiz App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/add-participant">
                  Add Participant
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/show-participants">
                  Participants
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/add-quiz">
                  Add Quiz
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/quiz-result">
                  Results
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
