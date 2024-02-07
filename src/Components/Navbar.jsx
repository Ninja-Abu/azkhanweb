import React from 'react'
import './Navbar.css'
import resumePDF from './Assetts/LatexAbuOG_Frontend.pdf'

function Navbar() {
  return (
    <div className="landing-nav">
        <div className="nav-head">
            Abu Zaid Khan
        </div>
            <div className="nav-links">
                <ul>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>About Me</li>
                    <li> <a href={resumePDF} target='_toBlank'>Resume</a></li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar