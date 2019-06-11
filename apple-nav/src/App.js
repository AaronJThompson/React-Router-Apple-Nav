import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavWrapper from './components/Navigation/NavWrapper';

let screens = [
  {path: '/', name: 'Home'},
  {path: '/mac', name: 'Mac'},
  {path: '/ipad', name: 'iPad'},
  {path: '/iphone', name: 'iPhone'},
  {path: '/watch', name: 'Watch'},
  {path: '/tv', name: 'TV'},
  {path: '/music', name: 'Music'},
  {path: '/support', name: 'Support'},
]
function App() {
  return (
    <Router>
      <NavWrapper screens={screens} />
    </Router>
  );
}

export default App;
