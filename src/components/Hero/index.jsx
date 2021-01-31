import React, { useState } from "react";
import HeroBox from "./HeroBox/HeroBox";
import HeroSlider from "./HeroSlider/HeroSlider";
import HeroSliderDots from "./HeroSliderDots/HeroSliderDots";

const HeroSection = () => {
  // most selling products
  /*
    1. Look at the 4 most selling products from different categories
    2. {image_url,title,subtitle (napis, ki gre v slider),discount-text (napis, ki gre nad subtitle v primeru akcije)}
    3. for slider dots - i will use FavoriteBorderIcon !!!already imported at the top
  */
  const [sliderArr, setSliderArr] = useState([
    {
      image_url: "image_url",
      title: "Mushie",
      subtitle: "Pozdravljena blagovna znamka Mushie!",
      discount_text: "",
    },
    {
      image_url: "https://www.evitas.si/images/thumbs/0098045.jpeg",
      title: "Furniture",
      subtitle: "40% popust na EM furniture!",
      discount_text: "Akcija traja od 7.12. do 31.1.202.",
    },
    {
      image_url: "image_url3",
      title: "Diapers",
      subtitle:
        "Eco by Naty plenice za enkratno uporabo so edine plenice s 100 % certificiranim naravnim materialom",
      discount_text: "",
    },
    {
      image_url: "image_url4",
      title: "Jollein izdelki",
      subtitle: "Jollein izdelki za nego, igro in dekoracijo sobice",
      discount_text: "",
    },
  ]);
  return (
    <div id='hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8 hero-slider-wrapper'>
            <HeroSlider />
            <HeroSliderDots />
          </div>
          <div className='col-12 col-lg-4 hero-aside-wrapper'>
            <HeroBox />
            <HeroBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
