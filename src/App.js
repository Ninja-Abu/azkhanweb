import './App.css';

import Navbar from './Components/Navbar';
import LeftBar from './Components/LeftBar';
import ScreenContent from './Components/ScreenContent';
import React, { useState } from 'react';


function App() {
    const [screenContent, setScreenContent] = useState('Landing.txt');
    const [searchQuery, setSearchQuery] = useState('');

    const handleScreenChange = (content) => {
        setScreenContent(content);
    }

    const handleSearchQuery = (query) => {
        setSearchQuery(query);
    }

  return (
    <div className="App">
      <Navbar handleSearchQuery={handleSearchQuery}/>
      <div className='content-container'>
        <div className='left-container'>
          <LeftBar handleScreenChange={handleScreenChange}/>
        </div>
        <div className='right-container'>
          <ScreenContent screenName={screenContent} searchQuery={searchQuery}/>
        </div>
      </div>
    </div>
  );
}

export default App;
