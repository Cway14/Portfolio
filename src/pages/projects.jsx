import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import projects from '../data/projects.json';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/projectsPage.css';

function AboutPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <h2 className="text-2xl w-full text-center py-8">Projects</h2>
      <section className="project-container">
        {projects.map((project, index) => {
          const image = data?.allFile?.edges?.find(
            (image) => image?.node.name === project.image
          )?.node?.childImageSharp?.gatsbyImageData;
          return (
            <div className={`projects item ${index % 2 ? 'left' : 'right'}`}>
              <GatsbyImage image={image} className="projects item image" />
              <div className={`project-${project.title.replace(/ /g, '')}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a>
                  <ins>Github</ins>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

export const imageQuery = graphql`
  query {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default AboutPage;
