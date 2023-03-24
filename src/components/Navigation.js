import React, { Component } from 'react'
import '../darkmode.css'

class Navigation extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }   

    render() {
        const { clicked } = this.state
        const { darkMode, onDarkModeToggle } = this.props
        const iconClass = darkMode ? "fa-moon" : "fa-sun";
        const buttonClass = `dark-mode-toggle ${darkMode ? 'dark' : 'light'}`

        return (
        <>
        <nav className={darkMode ? 'dark' : ''}> 
            <i className="fa-solid fa-code portfolio-brand"></i>
            <div>
                <ul id='navbar' 
                className={`${
                    this.state.clicked ? "#navbar active" : "#navbar"
                  } ${darkMode ? "dark" : ""}`}>
                    <li><a href='#about' onClick={this.handleClick}>About</a></li>
                    <li><a href='#portfolio' onClick={this.handleClick}>Portfolio</a></li>
                    <li><a href='#contact' onClick={this.handleClick}>Contact</a></li>
                    <li><a href='#resume' onClick={this.handleClick}>Resume</a></li>
                    <button className={buttonClass} onClick={onDarkModeToggle}>
                        <i className={`fas ${iconClass}`}></i>
                    </button>
                </ul>
            </div>
            <div id='mobile'onClick={this.handleClick}>
                <i id="bar"
                    className={this.state.clicked ?
                    "fa-sharp fa-solid fa-xmark" :
                    "fa-sharp fa-solid fa-bars"}>
                </i>
            </div>
        </nav>
        </>
        ) 
    }
}

export default Navigation
