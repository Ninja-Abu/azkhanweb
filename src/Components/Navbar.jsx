import React, { useState } from 'react'
import './Navbar.css'
import resumePDF from './Assetts/LatexAbuOG_Frontend.pdf'

var logo = require('./Assetts/AZLogo.png');
var SearchIcon = require('./Assetts/Search icon.png');
var SendIcon = require('./Assetts/SendIcon.png');
var GithubIcon = require('./Assetts/GithubLogo.png');
var LinkedInLogo = require('./Assetts/LinkedinLogo.png');
var ResumeLogo = require('./Assetts/ResumeLogo.png');
var OtherLogo = require('./Assetts/OtherLogo.png');

function Navbar({ handleSearchQuery }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleInputChange = (e) => {
      setSearchText(e.target.value);
    }

    const handleSearch = (e) => {
      e.preventDefault();
      handleSearchQuery(searchText);
      setSearchText('');
    }

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="Abu Zaid Khan Logo" />
      </div>
      <div className="nav-search">
        <div className='nav-search-box'>
          <span>
            <img src={SearchIcon} alt="Search" />
          </span>
          <form onSubmit={handleSearch}>
            <input 
              type="text"
              className='search-bar' 
              placeholder="Search anything about me..." 
              value={searchText}
              onChange={handleInputChange}
              />
          </form>
          <div className="search-send" onClick={handleSearch}>
            <img src={SendIcon} alt="Send" />
          </div>
        </div>
      </div>
      <div className="nav-links">
        {/* Show Div if screen greater than 750px */}
        <div className='nav-links-web-icons'>

          <a href="https://github.com/Ninja-Abu" target='_toBlank'>
            <img src={GithubIcon} alt="Github" />
          </a>

          <a href="https://www.linkedin.com/in/abuzaidkhan/" target='_toBlank'>
            <img src={LinkedInLogo} alt="LinkedIn" />
          </a>

          <a href={resumePDF} target='_toBlank'>
            <img src={ResumeLogo} alt="Resume" />
          </a>

        </div>

        {/* Show Div if screen smaller than 750px */}
        <div className='nav-links-mob-icons'>
          <img src={OtherLogo} alt="Links" onClick={toggleDropdown}/>
          {dropdownOpen &&
            <div className='nav-links-mob-dropdown'>
              <a href="https://github.com/Ninja-Abu" target='_toBlank'>
                <img src={GithubIcon} alt="Github" />
              </a>

              <a href="https://www.linkedin.com/in/abuzaidkhan/" target='_toBlank'>
                <img src={LinkedInLogo} alt="LinkedIn" />
              </a>

              <a href={resumePDF} target='_toBlank'>
                <img src={ResumeLogo} alt="Resume" />
              </a>
            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Navbar

