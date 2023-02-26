import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zyyb3ns', 'template_kzo5m2q', form.current, 's7UOyqzT9hlhbOOfT')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        <div className='contact-container' id='contact'>
                <div className='left-container'>
                    <h2>Get in Touch</h2>
                </div>

                <div className='right-container'>
                    { done ? (
                        <div className='message-container'>
                            <p>Thanks for reaching out!</p>
                        </div>
                    ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='user_name' className='user' placeholder='Name' />
                        <input type='email' name='user_email' className='user' placeholder='Email' />
                        <textarea name='message' className='user' placeholder='Message' />
                        <input type='submit' value='Send' className='button contact-button' />
                    </form>
                    )}
                </div>
        </div>
        </>
        ) 
}

export default Contact
