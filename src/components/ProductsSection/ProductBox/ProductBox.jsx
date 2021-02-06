/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ProductBox = () => {
  return (
    <div className='ps-products-item'>
      <img src='' alt='Product image' />
      <div className='ps-products-content'>
        <h6>MH02-Black09</h6>
        <p className='ps-products-price'>
          <span className='ps-old-price'>$700.00</span>
          $350.00
        </p>
      </div>
    </div>
  );
};

export default ProductBox;
