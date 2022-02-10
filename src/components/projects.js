import React from 'react';
import ProjectCard from './projectCard';
import projects from '../data/projects.json';
import './projects.css';

const ProjectCardCarossel = () => {
  return (
    <div className="w-auto h-full relative overflow-scroll -mx-8 flex flex-row hide-scroll" >
      <div className="flex flex-row">
        {projects.map((project, i) => {
          return (<ProjectCard image={project.image} title={project.title} githubLink='https://github.com/cway14' bgWhite={project.bgWhite}/>);
        })}
      </div>
    </div>
  );
};

export default ProjectCardCarossel;
