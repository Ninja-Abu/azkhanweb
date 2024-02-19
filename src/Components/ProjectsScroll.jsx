import React from 'react'

import './ProjectsScroll.css'

import HygiaImg from "./Assetts/Hygia Image.png"
import DigitalPathImg from "./Assetts/DigitalPathology.png"
import RoofImg from "./Assetts/Roof Img.png"
import SubmissionImg from "./Assetts/TheSubmissions.png"

function ProjectsScroll() {
  return (
    <div className="proj-scroll-container">
        <div className="proj-hygia">
            <div className='job-top-head'>
                <p className='proj-heading'>WINNER Philly Codefest</p>
                <p className='proj-year'>2022</p>
            </div>
            <div className='job-top-bottom'>
                <p className='proj-heading'>Hygia</p>
                <p className='proj-year'>Frontend Devloper</p>
            </div>
            <div className='image-container'>
                <img src={HygiaImg} alt='Hygia App'/>
            </div>
        </div>

        <div className="proj-hygia">
            <div className='job-top-head'>
                <p className='proj-heading'>Digital Pathology</p>
                <p className='proj-year'>2023</p>
            </div>
            <div className='job-top-bottom'>
                <p className='proj-heading'>Sinusitis Severity Classification</p>
                <p className='proj-year'>Web Devloper</p>
            </div>
            <div className='image-container'>
                <img src={DigitalPathImg} alt='Hygia App'/>
            </div>
        </div>

        <div className="proj-hygia">
            <div className='job-top-head'>
                <p className='proj-heading'>Dragon Hacks 2022</p>
                <p className='proj-year'>2022</p>
            </div>
            <div className='job-top-bottom'>
                <p className='proj-heading'>Roof Web App</p>
                <p className='proj-year'>Software Devloper</p>
            </div>
            <div className='image-container'>
                <img src={RoofImg} alt='Hygia App'/>
            </div>
        </div>

        <div className="proj-hygia">
            <div className='job-top-head'>
                <p className='proj-heading'>The Submission</p>
                <p className='proj-year'>2016 - 2018</p>
            </div>
            <div className='job-top-bottom'>
                <p className='proj-heading'>Volunteer</p>
                <p className='proj-year'>Computer Science Tutor</p>
            </div>
            <div className='image-container'>
                <img src={SubmissionImg} alt='Hygia App'/>
            </div>
        </div>

    </div>
    )
}

export default ProjectsScroll