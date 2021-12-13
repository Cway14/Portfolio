import React from 'react';
import Nav from './nav';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className="object-top w-full flex justify-between p-6 py-4 items-center rounded-xl bg-white opacity-95 z-50">
      <Link to="/" className="items-center text-2xl">
        Cameron Way
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
