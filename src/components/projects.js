import React from 'react';
import ProjectCard from './projectCard';
import projects from '../data/projects.json';
import '../styles/projects.css';

const ProjectCardCarossel = () => {
  return (
    <div className="carossel">
      {projects.map((project, i) => {
        return (
          <ProjectCard
            image={project.image}
            title={project.title}
            githubLink="https://github.com/cway14"
            bgWhite={project.bgWhite}
          />
        );
      })}
    </div>
  );
};

export default ProjectCardCarossel;
