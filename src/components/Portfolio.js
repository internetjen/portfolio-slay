import React, { Component } from 'react'
import Project from './Project'
import projectSample from '../assets/project-sample.png'
import hoodlinkedImage from '../assets/hoodlinked-image.png'
import quizImage from '../assets/javascript-quiz.png'

class Portfolio extends Component {

    render() {
    
    const sampleDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    
    const { darkMode } = this.props;

    const projects = [
        {
            title: 'Hoodlinked',
            image: hoodlinkedImage,
            description: "Hoodlinked is a community-based sharing app. Upload the items you want to share and join groups to list your items with members of your community!",
            deployedUrl: 'https://hoodlinked.herokuapp.com/',
            githubUrl: 'https://github.com/hoodlinked/hoodlinked'
        },
        {
            title: 'Simple Quiz',
            image: quizImage,
            description: "A timed coding quiz with multiple-choice questions",
            deployedUrl: 'https://simplejs-quiz.netlify.app/',
            githubUrl: 'https://github.com/internetjen/javascript-quiz-slay'
        }
    ]

    return (
        <div className={`project-container ${darkMode ? 'dark' : ''}`} id='portfolio'>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}
}

export default Portfolio
