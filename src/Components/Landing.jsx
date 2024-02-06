import React from 'react'
import './Landing.css'

import Navbar from './Navbar'
import landingImg from './Assetts/landingImg.png'

function Landing() {
  return (
    <div className="landing-container">
      <Navbar/>
      
      <div className="landing-img-container">
        <div className="landing-img">
          <div className="landing-img-text">
            Designer Devloper Creative
          </div>
          <img className='landing-img-abu' src={landingImg} alt="Designer, Devloper, Creative"/>
        </div>
      </div>

      <div className="edu-container">
        <div className="edu-info">
          <div className="edu-row-1">
            <div id="box-1">Drexel University</div>
            <div id="box-2">2024</div>
          </div>
          <div className="edu-row-2">
            <div id="box-3">Email</div>
            <div id="box-4">ak3776@drexel.edu</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing