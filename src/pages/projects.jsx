import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import projects from '../data/projects.json';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/projectsPage.css';

function AboutPage({ data }) {
  const findImage = (image) => {
    return data?.allFile?.edges?.find((i) => i?.node.name === image)?.node
      ?.childImageSharp?.gatsbyImageData;
  };

  return (
    <Layout>
      <SEO keywords={[`gatsby`, `react`]} title="Projects" />
      <div
        style={{ maxWidth: '1250px', textAlign: 'center', margin: '0 auto' }}
      >
        <h2>Projects</h2>
        <section className="project-container">
          {projects.map((project, index) => {
            const image = findImage(project.image);
            return (
              <div className={`projects item ${index % 2 ? 'left' : 'right'}`}>
                <GatsbyImage image={image} className="projects item image" />
                <div id={`project-${project.title.replace(/ /g, '')}`}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.githubLink && (
                    <a href={project.githubLink || 'https://github.com/cway14'}>
                      <ins>Github</ins>
                    </a>
                  )}
                  {'  '}
                  {project.link && (
                    <ins>
                      <a href={project.link}>
                        {project.linkDescription || 'Website'}
                      </a>
                    </ins>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>
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
