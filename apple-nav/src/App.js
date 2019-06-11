import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavWrapper from './components/Navigation/NavWrapper';

let screens = [
  {path: '/', name: 'Home'},
  {path: '/mac', name: 'Mac', subScreens:[
    {path: '/macbook', name:'Macbook'},
    {path: '/macbook-air', name:'Macbook Air'},
    {path: '/macbook-pro', name:'Macbook Pro'},
    {path: '/imac', name:'iMac'},
    {path: '/imac-pro', name:'iMac Pro'},
    {path: '/mac-pro', name:'Mac Pro'},
    {path: '/mac/compare', name:'Compare'},
    {path: '/pro-display-xdr', name:'Pro Display XDR'},
    {path: '/mac/accessories', name:'Accessories'},
    {path: '/macos/mojave', name:'Mojave'},
  ]},
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
