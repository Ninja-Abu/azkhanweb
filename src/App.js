import './App.css';

import Tempo from './Components/Tempo';

import Landing from './Components/Landing';
import WorkExp from './Components/WorkExp';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe'

function App() {
  return (
    <div className="App">
      <Landing/> 
      <WorkExp/> 
      <Projects/>
      <AboutMe/> 
      <div>
        Work under construction
      </div>
    </div>
  );
}

export default App;
