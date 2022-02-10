import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// import resume from 'static/Resume.pdf';
import { graphql } from 'gatsby';

const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "Resume" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  const resumeURL = data.allFile?.edges[0]
    ? data.allFile.edges[0]?.node.publicURL
    : '';
  return (
    <ul className="flex flex-row">
      <li>
        <Link
          to="/about"
          href="/about"
          className="p-4 hover:text-gray-500 font-bold"
        >
          About
        </Link>
      </li>
      <li>
        <a
          href={resumeURL}
          className="p-4 hover:text-gray-500 font-bold"
          download="Cameron Way's Resume"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="https://github.com/cway14"
          className="p-4 hover:text-gray-500 font-bold"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/camway/"
          className="p-4 hover:text-gray-500 font-bold"
        >
          Linkedin
        </a>
      </li>
      <li>
        <Link
          to="/projects"
          className="bg-black text-white px-4 hover:text-gray-300 font-bold py-3 rounded-lg items-center ml-4 mr-2"
        >
          {' '}
          View Work
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
