import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Login from './scenes/login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard"  component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
