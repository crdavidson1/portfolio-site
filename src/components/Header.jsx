import React from 'react';
import '../css/Header.css';
import logo from '../assets/springit.jpeg'
import { Link } from 'react-scroll/modules';

export default function Header() {
    return (
      <div style={{}}>
      <header className="header" style={{}}>
      <img src={logo} style={{width: 'auto', height: '96px', zIndex: 1000, top:'0%', left:'0'}}/>
        <nav>
            <ul>
                <li>
                  <Link to="services" smooth>Services</Link>
                </li>
                <li>
                <Link to="portfolio" smooth>Portfolio</Link>
                </li>
                <li>
                <Link to="about" smooth>About Us</Link>
                </li>
            </ul>
        </nav>
      </header>
      </div>
    );
  }