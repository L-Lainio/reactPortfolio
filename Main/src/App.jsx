import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Home darkMode={darkMode} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
