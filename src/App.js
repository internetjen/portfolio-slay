import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Resume from './components/Resume';
import './darkmode.css'


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(prevState => !prevState);
  }


  return (
    <div className={darkMode ? 'dark' : ''}>
        <Navigation darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
          <Header  darkMode={darkMode} />
          <Portfolio  darkMode={darkMode} />
          <Contact  darkMode={darkMode}/>
          <Resume  darkMode={darkMode}/>
          <Footer  darkMode={darkMode}/>
    </div>
  );
};
export default App;