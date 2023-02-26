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
            <div>
                <h2>Looking for a resume?</h2>
                <button className='button resume-button' onClick={handleClick}>Download Here</button>
            </div>
        </div>
        </>
    ) 
};

export default Resume
