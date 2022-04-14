import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="flex-1 w-full px-4 pb-8 mx-auto md:px-8 max-w-7xl h-full content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
