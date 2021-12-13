import React from 'react';
import ProjectCard from './projectCard';
import todo from '../Resources/todo-app.png';
import motherboard from '../Resources/motherboard.jpg';
import designit from '../Resources/designit.png';
import projects from '../data/projects.json';
import './projects.css';

const ProjectCardCarossel = () => {
  return (
    <div className="w-auto h-full relative overflow-scroll -mx-8 flex flex-row hide-scroll" >
      <div className="flex flex-row">
        {projects.map((project, i) => {
          return (<ProjectCard image={`../Resources/${project.image || ''}`} title={project.title} githubLink='https://github.com/cway14' bgWhite={project.bgWhite}/>);
        })}
      </div>
    </div>
  );
};

export default ProjectCardCarossel;
