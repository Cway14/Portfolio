import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects';
import image from '../static/pic.jpeg';
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="cover-container">
        <div className="flex">
          <div className="cover-image">
            <img src={image} />
          </div>
          <div className="cover-text">
            <h2>Hi There!</h2>
            <p>
              My name is Cameron. I am a student at Simon Fraser University,
              Canada. I am studying Computer Science and Business. I am
              constantly curious about the world around me and always open to
              learning new things. When I am not at my computer, I can often be
              found playing lacrosse, working out, or skiing. I am currently
              working on improving this website. I hope you enjoy it!
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h3 className="section-title">Projects</h3>
      </div>
      <Projects />
      <div className="section">
        <h3 className="section-title">Skills</h3>
        <div className="section-text">
          <p>
            I have a wide range of skills, ranging from web development to
            business. From building out full stack applications in React, and
            ASP.Net to developing embedded systems in C, I have worked on a wide
            range of projects, and am always looking to learn new skills and
            technologies. I am very comfortable using development tools such as
            Git, VS Code, and the command line. I use MacOS as my daily driver,
            and I use Ubuntu/Arch on a regular basis to for my secondary
            computer.
          </p>
          <p>
            <strong>Frontend Development:</strong> HTML, CSS, Javascript, React
            (and Gatsby), AngularJS, Bootstrap, TailwindCSS
          </p>
          <p>
            <strong>Backend Development:</strong> Node.js, SQL, ASP.Net, C#,
            Python, Java
          </p>
          <p>
            <strong>Embedded Systems:</strong> C/C++, Arduino, Raspberry Pi
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
