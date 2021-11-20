import React from 'react'
import image from '../Resources/pic.jpeg';

const ProjectCard = () => {
    return (
        <div className="h-48 w-5/12 rounded-md shadow-md m-4 flex flex-row flex-shrink-0">
            <div className="w-1/2 rounded-l-md overflow-hidden">
                <img src={image}/>
            </div>
            <div className="w-1/2 p-4">
                <h3 className="text-xl pb-2">Project Name</h3>
                <p>This is how I completed this project, and how I will help your company be better</p>
            </div>
        </div>
    )
}

export default ProjectCard
