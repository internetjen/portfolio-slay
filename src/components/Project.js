import React, { Component } from 'react'
import firstProject from '../assets/project-1.png'
import secondProject from '../assets/project-2.png'
import thirdProject from '../assets/project-3.png'
import fourthProject from '../assets/project-4.png'

class Project extends Component {

    render() {
    return (
        <>
        <div className='project-container' id='portfolio'>
           <div className='card'>
                <div className='project-shadow'>
                    <h2>Project 1</h2>
                    <img className='project-img' src={firstProject} alt='placeholderImg'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button'>Deployed App</button>
                    <button className='button'>Github </button>
                </div>
            </div>
            <div className='card'>
                <div className='project-shadow'>
                    <h2>Project 2</h2>
                    <img className='project-img' src={secondProject} alt='placeholderImg'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button'>Deployed App</button>
                    <button className='button'>Github </button>
               </div>
            </div>
            <div className='card'>
                <div className='project-shadow'>
                    <h2>Project 3</h2>
                    <img className='project-img' src={thirdProject} alt='placeholderImg'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button'>Deployed App</button>
                    <button className='button'>Github </button>
                </div>
            </div>
            <div className='card'>
                <div className='project-shadow'>
                    <h2>Project 4</h2>
                    <img className='project-img' src={fourthProject} alt='placeholderImg'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button'>Deployed App</button>
                    <button className='button'>Github </button>
                </div>
            </div>
            <div className='card'>
                <div className='project-shadow'>
                    <h2>Project 5</h2>
                    <img className='project-img' src={secondProject} alt='placeholderImg'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button'>Deployed App</button>
                    <button className='button'>Github </button>
                </div>
            </div>
            <div className='card'>
                <div className='project-shadow'>
                    <h2>Project 6</h2>
                    <img className='project-img' src={firstProject} alt='placeholderImg'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button'>Deployed App</button>
                    <button className='button'>Github </button>
                </div>
            </div>
        </div>
        </>
        ) 
    }
}

export default Project
