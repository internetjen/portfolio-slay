import React from 'react';

const Footer = ({darkMode}) => {
  return (
    <>
      <div className={`footer-container ${darkMode ? 'dark' : ''}`}>
        <div>
          <ul >
            <li><a href='https://github.com/internetjen'><i class="fa-brands fa-github"></i></a></li>
            <li><a href='https://www.linkedin.com/in/jennifer-arboleda/'><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href='https://twitter.com/itsjenlissette'><i class="fa-brands fa-twitter"></i></a></li>
          </ul>
        </div>
          <div>
            <p> © internetjen</p>
          </div>
      </div>
    </>
  );
};

export default Footer;
