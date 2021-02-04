import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../assets/images/manufacturers/1.svg";
import Image2 from "../../../assets/images/manufacturers/2.svg";
import Image3 from "../../../assets/images/manufacturers/3.svg";
import Image4 from "../../../assets/images/manufacturers/4.svg";
import Image5 from "../../../assets/images/manufacturers/5.svg";
import Image6 from "../../../assets/images/manufacturers/6.svg";
import Image7 from "../../../assets/images/manufacturers/7.svg";
import { Link } from "react-router-dom";

const ManufacturersHomePage = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='manufacturer-slider-homepage'>
      <Slider {...settings}>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image1} alt='Manufacturer1' />
          </Link>
        </div>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image2} alt='Manufacturer2' />
          </Link>
        </div>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image3} alt='Manufacturer3' />
          </Link>
        </div>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image4} alt='Manufacturer4' />
          </Link>
        </div>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image5} alt='Manufacturer5' />
          </Link>
        </div>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image6} alt='Manufacturer6' />
          </Link>
        </div>
        <div className='manufacturer-item'>
          <Link to='/manufacturer/all'>
            <img src={Image7} alt='Manufacturer7' />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default ManufacturersHomePage;
