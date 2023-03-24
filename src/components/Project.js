import React from 'react'

const Project = ({title, image, description, deployedUrl, githubUrl }) => {

    return (
           <div className='card'>
                <div className='project-shadow'>
                    <h2>{title}</h2>
                    <img className='project-img' src={image} alt='project'></img>
                    <p className='project-description'>{description}</p>
                    <a href={deployedUrl} target='_blank'rel='noopener noreferrer'><button className='button'>Deployed App</button></a>
                    <a href={githubUrl} target='_blank' rel='noopener noreferrer'><button className='button'>Github</button></a>
                </div>
            </div>
    ) 
}

export default Project
