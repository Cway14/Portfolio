import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full px-4 pb-8 mx-auto md:px-8">
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
