import React from 'react'
import ProjectCard from './projectCard'

const ProjectCardCarossel = () => {
    return (
        <div className="flex flex-row">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default ProjectCardCarossel
