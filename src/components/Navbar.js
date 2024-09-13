import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BLOG APP</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;