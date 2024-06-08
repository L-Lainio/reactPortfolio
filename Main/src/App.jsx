import { useState } from 'react';

import Sidenav from './components/Sidenav';
import Home from './components/Home';
import About from './components/About';
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
      <Sidenav
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Home darkMode={darkMode} />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
