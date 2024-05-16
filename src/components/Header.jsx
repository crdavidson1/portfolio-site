import React from 'react';
import '../css/Header.css';
import logo from '../assets/springit.jpeg'

export default function Header() {
    return (
      <div>
      <img src={logo} style={{width: 'auto', height: '96px', zIndex: '1000', position: 'fixed', top:'0%', left:'0%', zIndex:'10000'}}/>
      <header className="header" style={{backgroundColor: 'white'}}>
        <nav>
            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#contact">About</a></li>
            </ul>
        </nav>
      </header>
      </div>
    );
  }