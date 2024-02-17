import React from 'react'
import './Navbar.css'
import resumePDF from './Assetts/LatexAbuOG_Frontend.pdf'

function Navbar({ scrollToWork, scrollToProj, scrollToAbout }) {
  return (
    <div className="landing-nav">
        <div className="nav-head">
            Abu Zaid Khan
        </div>
            <div className="nav-links">
                <ul>
                    <li onClick={scrollToWork}>Experience</li>
                    <li onClick={scrollToProj}>Projects</li>
                    <li onClick={scrollToAbout}>About Me</li>
                    <li> <a href={resumePDF} target='_toBlank'>Resume</a></li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar