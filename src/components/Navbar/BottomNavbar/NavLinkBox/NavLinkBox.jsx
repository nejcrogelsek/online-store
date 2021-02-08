import React, { useState } from "react";
import Image from "../../../../assets/images/1.jpg";
import { Link, NavLink } from "react-router-dom";
import SubCatLinkBox from "./SubCatLinkBox/SubCatLinkBox";
import { v4 as uuidv4 } from "uuid";

const NavLinkBox = ({ name, dropdown, subcat }) => {
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
          <button className={onHover ? "d-btn active" : "d-btn"}>{name}</button>
          <div className='d-content'>
            <div className='d-wrapper'>
              {subcat.map(({ title, inner_subcat }) => (
                <SubCatLinkBox
                  key={uuidv4()}
                  title={title}
                  subcat={inner_subcat}
                />
              ))}
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
