import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles/resume.css';

const resume = ({ data }) => {
  return (
    <Layout>
      <embed
        src={data.file.publicURL}
        type="application/pdf"
        width="100%"
        height="100%"
        className="resume"
      />
    </Layout>
  );
};

export const resumeQuery = graphql`
  query {
    file(name: { eq: "Resume" }) {
      name
      publicURL
    }
  }
`;

export default resume;
