import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCardCarossel from "../components/projectCardCarrosel"
import image from '../Resources/pic.jpeg';
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="p-12">
        <div className="flex">
          <div className="w-1/3 rounded-lg overflow-hidden">
            <img src={image} className='w-full h-full object-cover' />
          </div>
          <div className="w-2/3 p-8 py-12">
            <h2 className="text-5xl font-bold">Hi There!</h2>
            <p className="py-2">My name is Cameron. I am a student at Simon Fraser University, Canada. I am studying Computer Science and Business. Fusce id rutrum turpis. Vestibulum eget fringilla velit. Duis turpis ipsum, condimentum non lectus eget, tristique bibendum arcu. Nulla et enim nulla. Nam interdum ante eu felis vestibulum, feugiat ultrices ex dignissim. </p>
          </div>
        </div>
      </div>
      <ProjectCardCarossel />
    </Layout>
  );
}

export default IndexPage;
