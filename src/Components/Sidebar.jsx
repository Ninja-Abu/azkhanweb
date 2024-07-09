import React, { useState } from 'react'

import './Sidebar.css'

var DownArrow = require('./Assetts/ArrowDown.png');
var Txtlogo = require('./Assetts/txtLogo.png');
var CloseIcon = require('./Assetts/Close.png');

const pages = {
    Home: ['Landing.txt', 'About_Me.txt'],
    Work: ['Tridiuum.txt', 'Tridiuum2.txt', 'VAC_Motorsports.txt', 'Focus.txt'],
    Projects: ['Hummingbird.txt', 'Hygia.txt', 'Digital_Pathology.txt', 'Roof.txt', 'Submission.txt'],
    School: ['Classes.txt', 'Assignments.txt'],
  };

function Sidebar({ content, toggleSidebar, handleScreenChange }) {

    const [selectedPage, setSelectedPage] = useState('Landing.txt');
    const handlePageClick = (page) => {
        setSelectedPage(page);
        handleScreenChange(page);
    }

  return (
    <div className='sidebar-container'>
        <div className="sidebar-heading">
            <img src={DownArrow} alt="Down Arrow"/>
            {content}
            <div className="close-sidebar" onClick={toggleSidebar}>
                <img src={CloseIcon} alt="Close Icon"/>
            </div>
        </div>
        <div className="sidebar-content">
            {pages[content]?.map((page, index) => (
                <div 
                    key={index} 
                    className={`sidebar-content-item ${selectedPage === page ? 'selected' : ''}`}
                    onClick={()=>handlePageClick(page)}
                    >
                        <img src={Txtlogo} alt="Txt Logo"/>
                        {page}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar