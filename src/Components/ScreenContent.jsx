import React from 'react'

import './ScreenContent.css'
import QueryBox from './QueryBox'
import WorkExp from './Data/workExp.json'
import ProjExp from './Data/projExp.json'
import TextScrn from './textScreen'
import LandingScreen from './LandingScrn'
import AboutMeScreen from './AboutmeScrn'

import DisplayImages from './DisplayImages'

function ScreenContent({ screenName, searchQuery }) {

    let job = WorkExp.find((job) => job.filename === screenName)

    if (!job) {
        job = ProjExp.find((job) => job.filename === screenName)
    }

    // const imageNames = job ? job.images.map(image => image.name).join(', ') : '';

  return (
    <div className='screen-container'>

        <div className="screen-content-container">
            {screenName === 'Landing.txt' ? (
                <div className='screen-home-content'>
                    <LandingScreen />
                </div>
            ) : screenName === 'About_Me.txt' ? (
                <div className='screen-about-content'> 
                    <AboutMeScreen />
                </div>
            ) : screenName === 'Classes.txt' || screenName === 'Assignments.txt' ? (
                <div className='screen-classes-content'>
                    <p>Sorry, this content is not up right now. Please check back soon.</p>
                </div>
            ): (
                <div className='screen-other-content'>
                    <div className='screen-other-left'>
                            <TextScrn content={job} />
                            {/* {job.jobName} */}
                        </div>
                    <div className='screen-other-right'>
                            {/* {imageNames}     */}
                            {/* <displayImages images={job.images} /> */}
                            <DisplayImages imagesArr ={job.images} />
                        </div>          
                    </div>
                )}
        </div>


        <div className="screen-query-container">
            <QueryBox searchQuery={searchQuery}/>
        </div>

    </div>
  )
}

export default ScreenContent