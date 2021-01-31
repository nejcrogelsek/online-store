import React from "react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <div id='hero-slider' className='slider-item'>
      <Link to='/'>
        <div className='slider-text'>
          <span>Akcija traja od 7.12. do 31.1.202.</span>
          <h2>40% popust na EM furniture!</h2>
        </div>
        <div className='slider-image'>
          <img
            src='https://www.evitas.si/images/thumbs/0098045.jpeg'
            alt='title'
          />
        </div>
      </Link>
    </div>
  );
};

export default HeroSlider;
