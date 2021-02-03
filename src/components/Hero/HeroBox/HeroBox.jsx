import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/images/1.jpg";

const HeroBox = () => {
  return (
    <div className='hero-box'>
      <Link to='/'>
        <div className='box-text'>
          <h2>Accessories</h2>
        </div>
        <div className='box-image'>
          <img src={Image} alt='title' />
        </div>
      </Link>
    </div>
  );
};

export default HeroBox;
