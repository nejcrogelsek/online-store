import React from "react";
import { NavLink } from "react-router-dom";

const MobileSubCatLinks = ({
  title,
  subcat_name,
  showMobileNav,
  setShowMobileNav,
}) => {
  const toggleMobileNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <li className='mn-item'>
      <NavLink
        className='nav-link'
        to='/category/neki'
        onClick={toggleMobileNavigation}>
        {subcat_name}
      </NavLink>
    </li>
  );
};

export default MobileSubCatLinks;
