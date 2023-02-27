import React, { Component } from 'react'
import Project from './Project'
import projectSample from '../assets/project-sample.png'

class Portfolio extends Component {

    render() {
    
    const sampleDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    

    const projects = [
        {
            title: 'Project 1',
            image: projectSample,
            description: sampleDescription,
            deployedUrl: 'https://internetjen.github.io/portfolio-slay/',
            githubUrl: 'https://github.com/internetjen/'
        },
        {
            title: 'Project 2',
            image: projectSample,
            description: sampleDescription,
            deployedUrl: 'https://internetjen.github.io/portfolio-slay/',
            githubUrl: 'https://github.com/internetjen/'
        },
        {
            title: 'Project 3',
            image: projectSample,
            description: sampleDescription,
            deployedUrl: 'https://internetjen.github.io/portfolio-slay/',
            githubUrl: 'https://github.com/internetjen/'
        },
        {
            title: 'Project 4',
            image: projectSample,
            description: sampleDescription,
            deployedUrl: 'https://internetjen.github.io/portfolio-slay/',
            githubUrl: 'https://github.com/internetjen/'
        },
        {
            title: 'Project 5',
            image: projectSample,
            description: sampleDescription,
            deployedUrl: 'https://internetjen.github.io/portfolio-slay/',
            githubUrl: 'https://github.com/internetjen/'
        },
        {
            title: 'Project 6',
            image: projectSample,
            description: sampleDescription,
            deployedUrl: 'https://internetjen.github.io/portfolio-slay/',
            githubUrl: 'https://github.com/internetjen/'
        }
    ]

    return (
        <div className='project-container' id='portfolio'>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}
}

export default Portfolio
