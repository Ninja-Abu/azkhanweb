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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                  <img className='LILogo' src={LILogo} alt='LinkedIn'/>
                  <img className='MailLogo' src={MailLogo} alt='Mail Me'/>
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
