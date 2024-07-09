import React, { useState } from 'react'
import './LeftBar.css'

import Sidebar from './Sidebar.jsx'

import resumePDF from './Assetts/LatexAbuOG_Frontend.pdf'

var HomeIcon = require('./Assetts/HomeIcon.png');
var WorkIcon = require('./Assetts/WorkIcon.png');
var ProjectsIcon = require('./Assetts/ProjectsIcon.png');
var SchoolIcon = require('./Assetts/SchoolIcon.png');
var ResumeIcon = require('./Assetts/ResumeIcon.png');

function LeftBar({ handleScreenChange }) {

    const [SideBar, setSideBar] = useState('Home');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const handleIconClick = (content) => {
        setSideBar(content);
        if (window.innerWidth <= 750) {
            setIsSidebarVisible(true);
            console.log('Sidebar Visible', isSidebarVisible);
        }
    }

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
        console.log('Sidebar Visible', isSidebarVisible);
    }

  return (
    <div className='leftbar-container'>
        <div className="left-icon-container">
            <div className="home-icon-cont" onClick={()=>handleIconClick('Home')}>
                <img src={HomeIcon} alt="Home"/>
            </div>
            <div className="work-icon-cont" onClick={()=>handleIconClick('Work')}>
                <img src={WorkIcon} alt="Work"/>
            </div>
            <div className="projects-icon-cont" onClick={()=>handleIconClick('Projects')}>
                <img src={ProjectsIcon} alt="Projects"/>
            </div>
            <div className="school-icon-cont" onClick={()=>handleIconClick('School')}>
                <img src={SchoolIcon} alt="School"/>
            </div>
            <div className="resume-icon-cont">
                <a href={resumePDF} target='_toBlank'>
                    <img src={ResumeIcon} alt="Resume"/>
                </a>
            </div>
        </div>
        <div className={`sidebar-container ${isSidebarVisible ? 'visible' : 'hidden'}`}>
            <Sidebar content={SideBar} toggleSidebar={toggleSidebar} handleScreenChange={handleScreenChange}/>
        </div>
    </div>
  )
}

export default LeftBar