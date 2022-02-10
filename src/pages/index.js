import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects';
import image from '../static/pic.jpeg';
function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Home" />

      <div className="p-12 py-28">
        <div className="flex">
          <div className="w-1/3 rounded-lg overflow-hidden">
            <img src={image} className="w-full h-full object-cover" />
          </div>
          <div className="w-2/3 p-8 py-12">
            <h2 className="text-5xl font-bold">Hi There!</h2>
            <p className="py-2">
              My name is Cameron. I am a student at Simon Fraser University, Canada. I am studying Computer Science and
              Business. I am constantly curious about the world around me and always open to learning new things.
              When I am not at my computer, I can often be found playing lacrosse, working out, or skiing.
              I am currently working on improving this website. I hope you enjoy it!
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 px-12">
        <h3 className="text-3xl font-bold">Projects</h3>
      </div>
      <Projects />
      <div className="w-2/3 p-12 py-20">
        <h3 className="text-3xl font-bold">Skills</h3>
        <p className="py-2">
          I have a wide range of skills, ranging from web development to business. From building out full stack applications in React, and ASP.Net to developing 
          embedded systems in C, I have worked on a wide range of projects, and am willing to learn new things. I am very comfortable using development tools
          such as Git, VS Code, and the command line. I use MacOS as my daily driver, and I use Ubuntu/Arch on a regular basis to for my secondary computer.
        </p>
        <p>
          <strong>Frontend Development:</strong> HTML, CSS, Javascript, React (and Gatsby), AngularJS, Bootstrap, TailwindCSS
          </p><p>
          <strong>Backend Development:</strong> Node.js, SQL, ASP.Net, C#, Python, Java
          </p><p>
          <strong>Embedded Systems:</strong> C/C++, Arduino, Raspberry Pi
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
