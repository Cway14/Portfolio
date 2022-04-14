import React from 'react';
import Nav from './nav';
import { Link } from 'gatsby';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="name">
        Cameron Way
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
