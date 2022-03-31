import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Collage = () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
      allFile(filter: { name: { ne: "Resume" } }) {
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

  const pics = ['lacrosse', 'skiing', 'hiking'];

  const gatsbyImages = data?.allFile?.edges?.filter((_image) =>
    pics.includes(_image?.node.name)
  )?.node?.childImageSharp?.gatsbyImageData;

  if (gatsbyImages)
    return gatsbyImages?.map((image) => <GatsbyImage image={image} />);
  return <>Something went wrong</>;
};

export default Collage;
