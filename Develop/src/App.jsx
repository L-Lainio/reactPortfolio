import React from 'react';
import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import Skill from './pages/About/Skill.jsx';

//  Need to update pdf of resume
// import resume from "./assets/pdf";

import './App.css';
import './Footer.css';
// import BucketList from './components/BucketList';



// import gitIcon from './assets/skill-icons/github.svg';
// import githubLink from './assets/skill-icons/github-link.svg';
// import homeLink from './assets/skill-icons/nav-arrow-up.svg';
// import contactIcon from './assets/skill-icons/contact.svg';
// import linkedinIcon from './assets/skill-icons/linkedin.svg';

// import htmlIcon from './assets/skill-icons/file-type-html.svg';
// import reactIcon from './assets/skill-icons/react.svg';
// import mongodbIcon from './assets/skill-icons/mongodb.svg';
// import javascriptIcon from './assets/skill-icons/javascript.svg';

function App() {
  return (
    <div className='App'>
      <div className='App'>
        <Home id='home' title='Home' />
        <div className='content'>
          <Navbar />
          <div className='about-skills-container'>
            <div className='about-section'>
              <About id='about' title='About' />
            </div>
            <div className='skills'>
              <Skill />
              <Skill skillName='JAVASCRIPT' imageUrl={javascriptIcon} />
              <Skill skillName='SQL' imageUrl={sqlIcon} />
              <Skill skillName='HTML' imageUrl={htmlIcon} />
              <Skill skillName='REACT' imageUrl={reactIcon} />
              <Skill skillName='MYSQL' imageUrl={mysqlIcon} />
              <Skill skillName='MONGODB' imageUrl={mongodbIcon} />
              <Skill skillName='REST API' imageUrl={restApiIcon} />
              <Skill skillName='GIT' imageUrl={gitIcon} />

            </div>
            <Project  id='projects' title='projects' />
            <Contact id="contact" title="Contact" />
            <Footer id="footer" title="Footer" />
          </div>
</div>
</div>
</div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </nav>
  );
}

function Footer({ id, title }) {
  return (
    <div className="Footer" id={id}>
      <div className="home-link">
        <a href="#home">
          <img src={homeLink} alt="home" />
        </a>
      </div>
      <div className="img-link-container">
        <a
          href="https://github.com/L-Lainio"
          target="_blank"
          className="home-go-to"
        >
          <img src={githubLink} alt="github" />
        </a>
        <a
          href="mailto:arollainio@gmail.com"
          target="_blank"
          className="home-go-to"
        >
          <img src={contactIcon} alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/in"
          target="_blank"
          className="home-go-to"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
      </div>
      <p>Lora Lainio</p>
    </div>
  );
}




export default App;
