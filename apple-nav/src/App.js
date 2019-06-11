import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavWrapper from './components/Navigation/NavWrapper';
function App() {
  return (
    <Router>
      <NavWrapper />
    </Router>
  );
}

export default App;
