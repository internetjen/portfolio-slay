import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!form.current.checkValidity()) {
      // If form is invalid, set the validation errors for each field
      setNameError(form.current.user_name.validity.valueMissing);
      setEmailError(form.current.user_email.validity.valueMissing || form.current.user_email.validity.typeMismatch);
      setMessageError(form.current.message.validity.valueMissing);
      return;
    }

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
          <h2>Get in Touch with Me</h2>
        </div>

        <div className='right-container'>
          {done ? (
            <div className='message-container'>
              <p>Thanks for reaching out!</p>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} noValidate>
              <input
                type='text'
                name='user_name'
                className='user'
                placeholder='Name'
                required
                onInvalid={() => setNameError(true)}
                onBlur={() => setNameError(false)}
              />
              {nameError && <div className='error-message'>Please enter your name.</div>}
              <input
                type='email'
                name='user_email'
                className='user'
                placeholder='Email'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                onInvalid={() => setEmailError(true)}
                onBlur={() => setEmailError(false)}
              />
              {emailError && (
                <div className='error-message'>
                  Please enter a valid email address.
                </div>
              )}
              <textarea
                name='message'
                className='user'
                placeholder='Message'
                required
                onInvalid={() => setMessageError(true)}
                onBlur={() => setMessageError(false)}
              />
              {messageError && (
                <div className='error-message'>Please enter a message.</div>
              )}
              <input
                type='submit'
                value='Send'
                className='button contact-button'
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
