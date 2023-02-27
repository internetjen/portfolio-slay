import React, { Component } from 'react'
import profile from '../assets/me_circle.png'

class Header extends Component {

    render() {
        return (
            <>
            <div className='hero-container'>
                <div className='left-container'>
                    <img src={profile} alt='profile'/>
                </div>
    
                <div className='right-container' id='about'>
                    <p>Hi, my name is</p>
                    <p className='slideInLeft'>Jennifer Arboleda</p>
                    <p>I am a <span>software engineer</span> living in Chicago.</p>
                    <button className='button hero-button' onClick={() => window.location.href='#contact'}>Hire me</button>
                </div>
                
            </div>
            </>
            ) 
        }
}

export default Header
