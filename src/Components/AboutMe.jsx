import React from 'react'
import './AboutMe.css'

import AboutMeAbu from './Assetts/AboutMeAbu.png'

export default function AboutMe() {
  return (
    <div className="aboutme-container">
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
                    <td>HTML</td><td>CSS</td><td>ReactJS</td><td>JavaScript</td><td>One More</td>
                  </tr>
                  <tr>
                    <td>HTML</td><td>CSS</td><td>ReactJS</td><td>JavaScript</td><td>One More</td>
                  </tr>
                  <tr>
                    <td>HTML</td><td>CSS</td><td>ReactJS</td><td>JavaScript</td><td>One More</td>
                  </tr>
                  <tr>
                    <td>HTML</td><td>CSS</td><td>ReactJS</td><td>JavaScript</td><td>One More</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="right-contact-container">
              <div className="contact-left-container">
                <h1>Contact Me</h1>
              </div>
              <div className="contact-right-container">
                Right
              </div>
              {/* 
              <div className="contact-content-container">
                <div className="contact-left-container">
                  Logos
                </div>
                <div className="contact-right-container">
                  Form
                </div>
              </div> */}
            </div>
          </div>
        </div>
    </div>
  )
}
