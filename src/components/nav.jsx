import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FaMoon } from 'react-icons/fa';
import '../styles/header.css';

const Nav = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light';
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ul className="nav">
      <li>
        <Link to="/about" href="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <a href="/resume" className="nav-link">
          Resume
        </a>
      </li>
      <li>
        <a href="https://github.com/cway14" className="nav-link">
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/camway/" className="nav-link">
          Linkedin
        </a>
      </li>
      <li>
        <Link to="/projects" className="header-projects">
          View Work
        </Link>
      </li>
      <li className="p-8 hover:text-gray-500">
        <button type="button" onClick={(e) => toggleTheme(e)}>
          <FaMoon />
        </button>
      </li>
    </ul>
  );
};

export default Nav;
