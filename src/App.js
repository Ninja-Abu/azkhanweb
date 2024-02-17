import './App.css';

import Landing from './Components/Landing';
import WorkExp from './Components/WorkExp';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe'
import { useRef } from 'react';

function App() {

  const workRef = useRef(null)
  const projRef = useRef(null)
  const aboutRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="App">
      <Landing
        scrollToWork={() => scrollToSection(workRef)} 
        scrollToProj={() => scrollToSection(projRef)} 
        scrollToAbout={() => scrollToSection(aboutRef)}
      /> 
      <WorkExp useRef={workRef}/> 
      <Projects useRef={projRef}/>
      <AboutMe useRef={aboutRef}/> 
    </div>
  );
}

export default App;
