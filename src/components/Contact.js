import React, { Component } from 'react'

class Contact extends Component {

    render() {
    return (
        <>
        <div className='contact-container'>
                <div className='left-container'>
                    <h2>Get in Touch</h2>
                </div>

                <div className='right-container'>
                    <form>
                        <input type='text' name='user-name' className='user' placeholder='Name' />
                        <input type='email' name='user-email' className='user' placeholder='Email' />
                        <textarea name='message' className='user' placeholder='Message' />
                        <input type='submit' value='Send' className='button contact-button' />
                    </form>
                </div>
        </div>
        </>
        ) 
    }
}

export default Contact
