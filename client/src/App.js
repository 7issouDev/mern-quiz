import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/header';

// Pages to implement
import AddParticipant from './pages/add-participant';
import AddQuiz from './pages/add-quiz';
import Dashboard from './pages/dashboard';
import ShowParticipants from './pages/show-participants';
import QuizResult from './pages/quiz-result';
import AddQuestion from './pages/add-question';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/add-participant">
              <AddParticipant />
            </Route>
            <Route path="/show-participants">
              <ShowParticipants />
            </Route>
            <Route path="/add-quiz">
              <AddQuiz />
            </Route>
            <Route path="/quiz-result">
              <QuizResult />
            </Route>
            <Route path="/add-question/:questionid">
              <AddQuestion />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
