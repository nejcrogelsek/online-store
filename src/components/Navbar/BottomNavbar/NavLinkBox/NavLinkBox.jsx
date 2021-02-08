import React, { useEffect, useState } from "react";
import Image from "../../../../assets/images/1.jpg";
import { Link, NavLink } from "react-router-dom";
import SubCatLinkBox from "./SubCatLinkBox/SubCatLinkBox";

const NavLinkBox = ({ name, dropdown, subcat }) => {
  const [numOfSubcat, setNumOfSubcat] = useState(4);
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    console.log(name);
    console.log(subcat);
  }, []);

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
                <SubCatLinkBox key={name} title={title} subcat={inner_subcat} />
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
