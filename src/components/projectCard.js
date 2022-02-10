import React from 'react';
import image from '../static/pic.jpeg';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const ProjectCard = (props) => {
  const { title, bgWhite, githubLink, data } = props;
  const image = data?.allFile?.edges?.find(
    (image) => image?.node.name === project.image
  )?.node?.childImageSharp?.gatsbyImageData;

  return (
    <div className="h-64 w-1/3 rounded-xl shadow-md m-4 flex flex-col flex-shrink-0 overflow-hidden transform hover:-translate-y-2 hover:shadow-lg duration-300">
      <Link to="/projects" state={{ title: title || '' }}>
        <div
          className={(bgWhite ? ' ' : 'bg-black ') + 'w-full overflow-hidden'}
        >
          <GatsbyImage image={image} />
        </div>
        <div className="p-3 font-medium flex justify-between items-center">
          <h3 className="text-lg p-2">{title}</h3>
          {githubLink && (
            <a href={githubLink} className="text-2xl p-2 hover:text-gray-600">
              <FaGithub />
            </a>
          )}
        </div>
      </Link>
    </div>
  );
};

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

export default ProjectCard;
