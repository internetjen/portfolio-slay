import React from 'react'
import resumePDF from '../assets/JENNIFER ARBOLEDA_RESUME 2022.pdf'

const Resume = () => {

    const handleClick = () => {
       const link = document.createElement('a');
       link.href = resumePDF;
       link.download = 'Jennifer_Arboleda_Resume.pdf';
       link.click();
    }

    return (
        <>
        <div className='resume-container' id='resume'>
            <div className='resume-left'>
                <div>
                    <h2>Proficiencies</h2>
                </div>
                <div>
                <i class="fa-brands fa-square-js"></i><p>JavaScript</p>
                <i class="fa-brands fa-react"></i><p>React</p>
                <i class="fa-solid fa-database"></i><p>SQL</p>
                <i class="fa-brands fa-node-js"></i><p>Node.js</p>
                <i class="fa-brands fa-html5"></i><p>HTML</p>
                <i class="fa-brands fa-css3-alt"></i><p>CSS</p>
                </div>
            </div>
            <div className='resume-right'>
                <div>
                    <h2>Looking for a resume?</h2>
                </div>
                <div>
                    <button className='button resume-button' onClick={handleClick}>Download Here</button>
                </div>
            </div>
        </div>
        </>
    ) 
};

export default Resume