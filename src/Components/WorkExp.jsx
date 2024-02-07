import React from 'react'
import './WorkExp.css'
import TVScreen from './Assetts/Screen.png'
import JobsList from './JobsList'



export default function WorkExp() {
  return (
    <div className="work-exp-container">
      <div className="jobs-container">
        <JobsList/>
      </div>
      <div className="tvs-container">
        <img className = "tv-img" src = {TVScreen} alt="Day at work"/>
      </div>
      <div className="work-text-container">
        <div className="work-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="work-heading"> 
          <p>
            Work Experience
          </p>
        </div>
      </div>
    </div>
  )
}

