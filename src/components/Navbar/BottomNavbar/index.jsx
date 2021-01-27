import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/images/1.jpg";

const BottomNavbar = () => {
  const [numOfSubcat, setNumOfSubcat] = useState(4);
  return (
    <nav class='navbar' id='bottomNavbar'>
      <Link className='nav-link' to='category/clothes'>
        Man
      </Link>
      <Link className='nav-link' to='category/shoes'>
        Women
      </Link>
      <Link className='nav-link' to='category/furniture'>
        Furniture
      </Link>
      <Link className='nav-link' to='category/computer-equipment'>
        Computer equipment
      </Link>
      <Link className='nav-link' to='category/accessories'>
        Accessories
      </Link>
      <Link className='nav-link' to='category/other-products'>
        Other products
      </Link>
      <Link className='nav-link' to='category/reduced-prices'>
        Reduced prices
      </Link>
      <div class='d nav-link'>
        <button class='d-btn'>More</button>
        <div class='d-content'>
          <div class='d-wrapper'>
            <div class='column'>
              <h3>Category 1</h3>
              <Link to='#'>Link 1</Link>
              <Link to='#'>Link 2</Link>
              <Link to='#'>Link 3</Link>
            </div>
            <div class='column'>
              <h3>Category 2</h3>
              <Link to='#'>Link 1</Link>
              <Link to='#'>Link 2</Link>
              <Link to='#'>Link 3</Link>
              <Link to='#'>Link 3</Link>
              <Link to='#'>Link 4</Link>
              <Link to='#'>Link 6</Link>
              <Link to='#'>Link 7</Link>
              <Link to='#'>Link 8</Link>
            </div>
            <div class='column'>
              <h3>Ženska oblačila</h3>
              <Link to='#'>Link 1</Link>
              <Link to='#'>Link 2</Link>
              <Link to='#'>Link 3</Link>
              <Link to='#'>Link 4</Link>
            </div>
            <div class='column'>
              <h3>Ženska Snowboard oprema</h3>
              <Link to='#'>Link 1</Link>
              <Link to='#'>Link 2</Link>
              <Link to='#'>Link 3</Link>
              <Link to='#'>Link 4</Link>
              <Link to='#'>Link 5</Link>
              <Link to='#'>Link 6</Link>
            </div>
            <div class='column gifts'>
              <Link to='/gifts'>Gifts</Link>
            </div>
            {numOfSubcat <= 4 ? (
              <div className='d-image'>
                <img src={Image} alt='Dropdown slika' />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
