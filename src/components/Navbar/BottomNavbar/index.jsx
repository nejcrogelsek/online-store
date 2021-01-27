import React from "react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div id='bottomNavbar'>
      <ul>
        <li>
          <Link to='category/clothes'>Clothes</Link>
        </li>
        <li>
          <Link to='category/shoes'>Shoes</Link>
        </li>
        <li>
          <Link to='category/furniture'>Furniture</Link>
        </li>
        <li>
          <Link to='category/computer-equipment'>Computer equipment</Link>
        </li>
        <li>
          <Link to='category/accessories'>Accessories</Link>
        </li>
        <li>
          <Link to='category/other-products'>Other products</Link>
        </li>
        <li>
          <Link to='category/reduced-prices'>Reduced prices</Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
