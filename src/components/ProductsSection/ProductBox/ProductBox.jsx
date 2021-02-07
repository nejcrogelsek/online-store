/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ProductBox = ({ title, old_price, price, image_url }) => {
  return (
    <div className='ps-products-item'>
      <img src={image_url} alt='Product image' />
      <div className='ps-products-content'>
        <h6>{title}</h6>
        <p className='ps-products-price'>
          <span className='ps-old-price'>${old_price}</span>${price}
        </p>
      </div>
    </div>
  );
};

export default ProductBox;
