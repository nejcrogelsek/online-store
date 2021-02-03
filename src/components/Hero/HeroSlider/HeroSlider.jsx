import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/images/1.jpg";

const HeroSlider = () => {
  return (
    <div id='hero-slider' className='slider-item'>
      <Link to='/'>
        <div className='slider-text'>
          <span>Akcija traja od 7.12. do 31.1.202.</span>
          <h2>40% popust na EM furniture!</h2>
        </div>
        <div className='slider-image'>
          <img src={Image} alt='title' />
        </div>
      </Link>
    </div>
  );
};

export default HeroSlider;
