import React from 'react';
import image from '../static/pic.jpeg';
import { FaGithub } from 'react-icons/fa';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/projects.css';

const ProjectCard = (props) => {
  const { title, bgWhite, githubLink, image } = props;
  const data = useStaticQuery(graphql`
    query projectImages {
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
  `);

  const gatsbyImage = data?.allFile?.edges?.find(
    (_image) => _image?.node.name === image
  )?.node?.childImageSharp?.gatsbyImageData;

  return (
    <div className="card">
      <Link
        to={`/projects#project-${title.replace(/ /g, '')}`}
        state={{ title: title || '' }}
      >
        <div className="card-image">
          <GatsbyImage image={gatsbyImage} />
        </div>
        <div className="card-text">
          <h3>{title}</h3>
          {githubLink && (
            <a href={githubLink}>
              <FaGithub />
            </a>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
