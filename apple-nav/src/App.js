import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavWrapper from './components/Navigation/NavWrapper';

let screens = [
  {path: '/', name: 'Home'},
  {path: '/mac', name: 'Mac', subScreens:[
    {path: '/macbook', name:'Macbook', icon: 'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbook__do4qnh249seq_large.svg'},
    {path: '/macbook-air', name:'Macbook Air', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbookair__ej39du0gz4uq_large.svg'},
    {path: '/macbook-pro', name:'Macbook Pro', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg'},
    {path: '/imac', name:'iMac', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac__dkswmjfqeziq_large.svg'},
    {path: '/imac-pro', name:'iMac Pro', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/imac__dkswmjfqeziq_large.svg'},
    {path: '/mac-pro', name:'Mac Pro', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_pro__bn92faz71k6a_large.svg'},
    {path: '/mac/compare', name:'Compare', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg'},
    {path: '/pro-display-xdr', name:'Pro Display XDR', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg'},
    {path: '/mac/accessories', name:'Accessories', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg'},
    {path: '/macos/mojave', name:'Mojave', icon:'https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_osx__dntc9ef2limq_large.svg'},
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
