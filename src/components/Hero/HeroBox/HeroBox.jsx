import React from "react";
import { Link } from "react-router-dom";

const HeroBox = () => {
  return (
    <div className='hero-box'>
      <Link to='/'>
        <div className='box-text'>
          <h2>Accessories</h2>
        </div>
        <div className='box-image'>
          <img
            src='https://www.evitas.si/images/thumbs/0098045.jpeg'
            alt='title'
          />
        </div>
      </Link>
    </div>
  );
};

export default HeroBox;
