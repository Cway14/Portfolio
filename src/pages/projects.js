import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import motherboard from '../Resources/motherboard.jpg';
import projects from '../data/projects.json';
import CurrentProjectModal from '../components/currentProjectModal';

function AboutPage({ location }) {
    const [currentProject, setCurrentProject] = useState('');

    if (location?.state?.title && !currentProject) {
        setCurrentProject(location.state.title);
    }

    return (
        <Layout>
            <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="About" />
            <CurrentProjectModal project={{ title: currentProject }} show={currentProject}/>
            <h2 className='text-2xl w-full text-center py-8'>Projects</h2>
            <section className="flex flex-col items-center p-24 pt-2">
                {projects.map(project => (
                    <button className='py-2 flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden max-h-96' onClick={() => setCurrentProject(project.title)}>
                        <img src={motherboard} className='w-1/3'/>
                        <div className='p-8'>
                            <h3 className='text-xl'>{project.title}</h3>
                            <p>{project.image}</p>
                        </div>
                    </button>
                ))}
            </section>
        </Layout>
    );
}

export default AboutPage;
