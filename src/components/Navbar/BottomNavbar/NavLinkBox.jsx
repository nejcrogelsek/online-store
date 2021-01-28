import React, { useState } from "react";
import Image from "../../../assets/images/1.jpg";
import { Link, NavLink } from "react-router-dom";

const NavLinkBox = ({ name, dropdown }) => {
  const [numOfSubcat, setNumOfSubcat] = useState(4);
  const [onHover, setOnHover] = useState(false);
  const onEnter = () => {
    setOnHover(true);
  };

  const onLeave = () => {
    setOnHover(false);
  };
  return (
    <>
      {dropdown ? (
        <div
          className='d nav-link'
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}>
          <button className='d-btn'>{name}</button>
          <div className='d-content'>
            <div className='d-wrapper'>
              <div className='column'>
                <h3>Category 1</h3>
                <Link to='#'>Link 1</Link>
                <Link to='#'>Link 2</Link>
                <Link to='#'>Link 3</Link>
              </div>
              <div className='column'>
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
              <div className='column'>
                <h3>Ženska oblačila</h3>
                <Link to='#'>Link 1</Link>
                <Link to='#'>Link 2</Link>
                <Link to='#'>Link 3</Link>
                <Link to='#'>Link 4</Link>
              </div>
              <div className='column'>
                <h3>Ženska Snowboard oprema</h3>
                <Link to='#'>Link 1</Link>
                <Link to='#'>Link 2</Link>
                <Link to='#'>Link 3</Link>
                <Link to='#'>Link 4</Link>
                <Link to='#'>Link 5</Link>
                <Link to='#'>Link 6</Link>
              </div>
              <div className='column gifts'>
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
      ) : (
        <NavLink
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={onHover ? "nav-link active" : "nav-link"}
          to='category/clothes'>
          {name}
        </NavLink>
      )}
    </>
  );
};

export default NavLinkBox;
