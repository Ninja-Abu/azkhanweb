import React, { useState } from 'react'

import './DisplayImages.css'

function DisplayImages( { imagesArr } ) {

  const [currentIndex, setCurrentIndex] = useState(0);

//   const VACImg = require('./Assetts/VAC Image.png');

  const prevBtn = require('./Assetts/prevBtn.png')
  const nextBtn = require('./Assetts/nextBtn.png')

  // const firstImg = imagesArr && imagesArr.length > 0 ? imagesArr[0].filename : 'noImages.png';

  const getImages = (filename) => {
    try{
      return require(`./Assetts/${filename}`);
    } catch (error){
      return require('./Assetts/noImages.png');
    }
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? imagesArr.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === imagesArr.length - 1 ? 0 : currentIndex + 1);
  };

  const currentImage = getImages(imagesArr[currentIndex].filename);
  const currentImgName = imagesArr[currentIndex].name;

  return (
    <div className='carousel-container'>
      <div className="image-container">
        <img src={currentImage} className="image" />
        <p className='image-name'>  
            {currentImgName}
        </p>
      </div>
      <div className="btn-container">
        <img src={prevBtn} className="prev-btn" onClick={goToPrevious}/>
        <img src={nextBtn} className="next-btn" onClick={goToNext}/>
      </div>
    </div>
  )
}

export default DisplayImages