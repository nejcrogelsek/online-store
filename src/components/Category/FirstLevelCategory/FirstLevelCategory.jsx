/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "@material-ui/core";
import React from "react";
import Image1 from "../../../assets/images/breadcrumb/art2.jpg";

const FirstLevelCategory = () => {
  return (
    <div class='cat-lvl1'>
      <div className='item-grid'>
        <div className='item-box'>
          <Link to='/category/subcat'>
            <img src={Image1} alt='category picture' />
            <span className='title'>Moška obutev</span>
          </Link>
        </div>
        <div className='item-box'>
          <Link to='/category/subcat'>
            <img src={Image1} alt='category picture' />
            <span className='title'>Moška obutev</span>
          </Link>
        </div>
        <div className='item-box'>
          <Link to='/category/subcat'>
            <img src={Image1} alt='category picture' />
            <span className='title'>Moška obutev</span>
          </Link>
        </div>
        <div className='item-box'>
          <Link to='/category/subcat'>
            <img src={Image1} alt='category picture' />
            <span className='title'>Moška obutev</span>
          </Link>
        </div>
        <div className='item-box'>
          <Link to='/category/subcat'>
            <img src={Image1} alt='category picture' />
            <span className='title'>Moška obutev</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstLevelCategory;
