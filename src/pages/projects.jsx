import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import motherboard from '../static/motherboard.jpg';
import projects from '../data/projects.json';
import CurrentProjectModal from '../components/currentProjectModal';
import { GatsbyImage } from 'gatsby-plugin-image';

function AboutPage({ location, data }) {
  const [currentProject, setCurrentProject] = useState('');

  if (location?.state?.title && !currentProject) {
    setCurrentProject(location.state.title);
  }

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <CurrentProjectModal
        project={{ title: currentProject }}
        show={currentProject}
      />
      <h2 className="text-2xl w-full text-center py-8">Projects</h2>
      <section className="flex flex-col items-center p-24 pt-2">
        {projects.map((project) => {
          const image = data?.allFile?.edges?.find(
            (image) => image?.node.name === project.image
          )?.node?.childImageSharp?.gatsbyImageData;
          return (
            <button
              className="py-2 flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden max-h-96"
              onClick={() => setCurrentProject(project.title)}
            >
              <div className="w-1/3">
                <GatsbyImage image={image} />
              </div>
              <div className="p-8">
                <h3 className="text-xl">{project.title}</h3>
                <p>{project.image}</p>
              </div>
            </button>
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
