import React from 'react'

import './JobsList.css'

function JobsList() {

  return (
    <div className="jobs-container">
    <div className="jobs-list">
      <div className="job-1">
        <div id="dates">09/21 - 04/22 </div>
        <div id="company"> Lucet (formerly Tridiuum) </div>
        <div id="role"> Frontend Dev & UI/UX Researcher </div>
      </div>
      <div className="job-1">
        <div id="dates">09/20 - 04/21 </div>
        <div id="company"> Lucet (formerly Tridiuum) </div>
        <div id="role"> Frontend Dev - Customer Success </div>
      </div>
      <div className="job-1">
        <div id="dates">09/19 - 04/20 </div>
        <div id="company"> VAC Motorsports </div>
        <div id="role"> Web Developer & Marketing Intern </div>
      </div>
      <div className="job-1">
        <div id="dates">04/15 -present </div>
        <div id="company">Focus Print Solutions </div>
        <div id="role"> Freelance Graphic Designer </div>
      </div>
    </div>
  </div>
  )
}

export default JobsList