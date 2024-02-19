import React from 'react'
import './Projects.css'

import ProjectsScroll from './ProjectsScroll'

export default function Projects({ useRef }) {

  const projDesc = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Specializing in cutting-edge front-end and software technologies, my projects like \"Hygia\" and \"Digital Pathology\" showcase expertise in React Native, Firebase, Fast-API, Docker, PostgreSQL, ElectronJS, and React. \"Hygia\" prioritizes user-centric design with web scraping and sentiment analysis. \"Digital Pathology\" demonstrates proficiency in advanced image processing for responsive web applications. Overall, my diverse portfolio reflects a commitment to innovation and user-centric design across various domains."  ]

  return (
    <div ref={useRef}  className="projects-container">
        <div className="proj-left-container">
          <div className="proj-left-desc">
            {projDesc[1]}
          </div>
          <div className="proj-left-title">
            <p>
              Projects
            </p>
          </div>
        </div>
        <div className="proj-right-container">
          <div className="scroll-container">
            <ProjectsScroll/>
          </div>
        </div>
    </div>
  )
}