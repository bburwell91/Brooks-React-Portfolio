import React from 'react';
import NewProject from './NewProject';
import projectInfo from '../../src/data/projectInfo';

function Projects() {
    const ProjectComponents = projectInfo.map(project => 
        <NewProject 
            id={project.id}
            key={project.id} 
            imgUrl={project.image} 
            link={project.link}
            code={project.code} 
            title={project.title}
            description={project.description} 
        /> 
    )
    return (
        <section id="work">
            <h2>My Work.</h2>
            <ul>
                {ProjectComponents}
            </ul>
        </section>
    )
}

export default Projects;