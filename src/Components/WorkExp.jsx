import React, { useState } from 'react'
import './WorkExp.css'
import TVScreen_VAC from './Assetts/Screen.png'
import TVScreen_VAC2 from './Assetts/VAC Image 2.png'
import TVScreen_Tridiuum1 from './Assetts/Tridiuum 1 Image.png'
import TVScreen_Tridiuum2 from './Assetts/Tridiuum 2 Image.png'
import TVScreen_Focus from './Assetts/Focus Image.png'
import JobsList from './JobsList'



export default function WorkExp({ useRef }) {

  const JobDesc = [
    "In roles at Lucet, VAC Motorsport, and freelance graphic design, I've excelled in driving data-driven product development, boosting product adoption, and enhancing user engagement. Proficient in JavaScript, React, D3.js, Pendo, and design tools, my achievements range from integrating SaaS clients to automating analytics reporting, optimizing website traffic, and delivering impactful visual designs.......................................",
    "At Lucet, as a Frontend Developer & UI/UX Researcher, I shaped solutions with JavaScript, React, D3.js, and Pendo. Engineered dashboards, analyzed 1M+ user journeys, achieving 90% adoption among 18,000+ users. Revamped 190+ guides with JS, React, and Chrome Dev Tools, boosting onboarding by 42%. Innovatively, led a 70% cut in support tickets, developing a Salesforce chatbot. Advanced data-driven development, enhancing user experiences.",
    "In Customer Success at Lucet, I integrated 150+ SaaS clients, boosting adoption by 25%. Crafted 120+ onboarding guides using HTML5, CSS3, and Pendo, elevating user engagement by 80%. Engineered data abstraction with JavaScript, D3.js, and ReactJS for trend analysis, informing customer retention strategies. Advocated accessibility best practices, ensuring React quality with Jest, resulting in a 40% reduction in reported user issues.",
    "As a Web Developer & Marketing Intern at VAC Motorsport, I enhanced website traffic by 60% through strategic SEO in HTML, CSS, and JavaScript. Automated Google Analytics reporting with Python, significantly improving efficiency for the sales team. Revamped checkout on a ReactJS platform, optimizing efficiency and user satisfaction. Streamlined product inventory by enhancing visual appeal and organizational efficiency for 3000+ SKUs.",
    "Freelancing at Focus Print Solutions offered a dynamic creative space. Collaborating with 30+ diverse clients, I specialized in crafting compelling graphics, from logos to web assets. My contributions extended to local magazines and a news outlet, where I played a pivotal role in delivering impactful and visually appealing designs, significantly enhancing the overall brand presence and leaving a lasting impression.                  ."
  ]

  const tvScreenImg = [
    TVScreen_VAC,
    TVScreen_Tridiuum1,
    TVScreen_Tridiuum2,
    TVScreen_VAC2,
    TVScreen_Focus
  ]

  const [currentJobIndex, setCurrentJobIndex] = useState(1);

  const changeJobIndex = (index) => {
    setCurrentJobIndex(index);
  }

  return (
    <div ref={useRef} className="work-exp-container">
      <div className="jobs-list-container">

        <JobsList
          changeJobIndex = {changeJobIndex}
        />

      </div>
      <div className="tvs-container">
        <img className = "tv-img" src = {tvScreenImg[currentJobIndex]} alt="Day at work"/>
      </div>
      <div className="work-text-container">
        <div className="work-text">
          <p>
            {JobDesc[currentJobIndex]}
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

