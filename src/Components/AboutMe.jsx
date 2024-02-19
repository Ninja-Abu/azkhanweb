import React from 'react'
import './AboutMe.css'

import AboutMeAbu from './Assetts/AboutMeAbu.png'
import LILogo from './Assetts/LinkedinLogo.png'
import MailLogo from './Assetts/MailLogo.png'

export default function AboutMe({ useRef }) {
  return (
    <div ref={useRef} className="aboutme-container">
        <div className="about-left-container">
          <div className="left-img-container">
            <img src={AboutMeAbu} alt='About Me'/>
          </div>
          <div className="left-text-container">
            <p>
             As an innovative Front-End Developer, I blend creativity with technology to design and develop user-centric web applications. I'm passionate about solving intricate problems, achieving tangible results, and championing data-driven development. A proactive learner with deep interest in user behavior, I'm fluent in the latest technologies across product design, development, and deployment. I'm driven to enhance product efficiency and design, leveraging my inquisitiveness and creativity for significant contributions to innovative solutions.
            </p>
          </div>
        </div>
        <div className="about-right-container">
          <div className="about-right-content-container">
            <div className="right-skills-container">
              <h1>Skills</h1>
              <div className="skills-table-container">
                <table>
                  <tr>
                    <td>JavaScript</td><td>HTML</td><td>CSS</td><td>Java</td><td>C</td>
                  </tr>
                  <tr>
                    <td>C++</td><td>React</td><td>Node</td><td>D3.js</td><td>Bootstrap</td>
                  </tr>
                  <tr>
                    <td>Vue2</td><td>Jest</td><td>Cypress</td><td>Git</td><td>Docker</td>
                  </tr>
                  <tr>
                    <td>Firebase</td><td>AWS</td><td>Figma</td><td>WordPress</td><td>Salesforce</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="right-contact-container">
              <div className="contact-left-container">
                <h1>Contact Me</h1>
                <div className="contact-left-icons-container">
                  <a href='https://www.linkedin.com/in/abuzaidkhan/' target='_toBlank'>
                    <img className='LILogo' src={LILogo} alt='LinkedIn'/>
                  </a>
                  <a href='mailto:ak3776@drexel.edu' target='_toBlank'>
                    <img className='MailLogo' src={MailLogo} alt='Mail Me'/>
                  </a>
                </div>
              </div>
              <div className="contact-right-container">
                <div className="contact-right-form">
                  <form>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Email / LinkedIn'/>
                    <textarea placeholder='Enter your message here'/>
                    <button type='submit' className='send-btn'> Send </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
