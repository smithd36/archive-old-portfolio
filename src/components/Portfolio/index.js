import React, { useState, useEffect } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3, faJs, faReact, faPython, faSass, faLinux, faWindows, faGit, faNode } from '@fortawesome/free-brands-svg-icons';
import work1 from '../../assets/images/work-1.png';
import work2 from '../../assets/images/work-2.png';
import work3 from '../../assets/images/work-3.png';


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'u', 'r', 'r', 'e', 'n', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="portfolio-container">
            <div className="portfolio-item">
              <img src={work1} alt="work1" />
              <div className="portfolio-item-text">
                <h3>MediGuard Licensure</h3>
                <p>A full-stack MySQL (Azure hosted) Next.js tool designed to efficiently handle licensure of first responders in a location. This application simplifies administrative tasks, allowing healthcare professionals to focus on patient care. Mediguard Licensure is currently being used in the industry (client-name kept private) and I am continuing to scale and improve this application consistently, emphasising compliance and security.</p>
                {/* Tech used displaying logos for each */}
                <span className="tech-stack"><p><b>Azure | MySQL</b></p><span id="icons"><FontAwesomeIcon icon={faPython} color="red" /><FontAwesomeIcon icon={faNode} color="green" /><FontAwesomeIcon icon={faReact} color="aqua" /><FontAwesomeIcon icon={faJs} color="#FFFF00" /><FontAwesomeIcon icon={faSass} color="hotpink" /></span></span>
                <span>Project Repository:<a id= "gh-link" rel="noreferrer" target="_blank" href="https://github.com/smithd36/licensure-management-nextjs"><FontAwesomeIcon icon={faGithub} /></a></span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={work2} alt="work2" />
              <div className="portfolio-item-text">
                <h3>WeatherGuru Mobile App</h3>
                <p>Discover a practical mobile weather application developed with React Native and styled with Tailwind CSS. Seamlessly integrated with the WeatherAPI, this app delivers a user-friendly experience. It provides essential weather details such as wind speed, a 7-day forecast, and real-time updates based on your location.</p>
                {/* Tech used displaying logos for each */}
                <span className="tech-stack"><p><b>~ TailwindCSS</b></p><span id="icons"><FontAwesomeIcon icon={faNode} color="green" /><FontAwesomeIcon icon={faReact} color="aqua" /><FontAwesomeIcon icon={faJs} color="#FFFF00" /><FontAwesomeIcon icon={faHtml5} color="#0451b0" /><FontAwesomeIcon icon={faCss3} color="orange" /></span></span>
                <span>Project Repository:<a id= "gh-link" rel="noreferrer" target="_blank" href="https://github.com/smithd36/react-native-tailwind-weather-app"><FontAwesomeIcon icon={faGithub} /></a></span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={work3} alt="work3" />
              <div className="portfolio-item-text">
                <h3>C++ Powershell Toolkit</h3>
                <p>This innovative shell interface takes command execution to the next level by seamlessly managing multiple user commands in parallel processes. Effortlessly orchestrate command pairs with intuitive pipes for seamless communication and data flow. Redefine output destinations with precision and navigate complex workflows efficiently. Our user-centric design supports commands with arguments, ensuring a tailored experience. With a robust architecture and comprehensive documentation, the CS 461 OS Shell is your gateway to a more powerful and efficient command line experience.</p>
                {/* Tech used displaying logos for each */}
                <span className="tech-stack"><p><b>College Project</b></p><span id="icons"><FontAwesomeIcon icon={faGit} color="orange" /><FontAwesomeIcon icon={faWindows} color="blue" /><FontAwesomeIcon icon={faLinux} color="#FF4500" /><FontAwesomeIcon icon={faJs} color="#FFFF00" /></span></span>
                <span>Project Repository:<a id= "gh-link" rel="noreferrer" target="_blank" href="https://github.com/smithd36/unix-power-shell"><FontAwesomeIcon icon={faGithub} /></a></span>
              </div>
            </div>
          </div>
          <p id="header-caption">Skills grow. So will this portfolio.</p>
          <p><i>Full Project Archive Coming Soon...</i></p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;