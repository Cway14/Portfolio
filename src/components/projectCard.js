import React from 'react';
import image from '../Resources/pic.jpeg';
import { FaGithub } from 'react-icons/fa'
import {Link} from 'gatsby';

const ProjectCard = (props) => {
  return (
    <div className="h-64 w-1/3 rounded-xl shadow-md m-4 flex flex-col flex-shrink-0 overflow-hidden transform hover:-translate-y-2 hover:shadow-lg duration-300">
      <Link
        to='/projects'
        state={{ title: props.title || '' }}>
        <div className={(props.bgWhite ? " " : "bg-black ") + "w-full overflow-hidden"}>
          <img src={props.image} className='opacity-75'/>
        </div>
        <div className="p-3 font-medium flex justify-between items-center">
          <h3 className="text-lg p-2">{props.title}</h3>
          {props.githubLink && <a href={props.githubLink} className='text-2xl p-2 hover:text-gray-600'><FaGithub/></a>}
        </div>
      </Link>
  </div>
  )
};

export default ProjectCard;
