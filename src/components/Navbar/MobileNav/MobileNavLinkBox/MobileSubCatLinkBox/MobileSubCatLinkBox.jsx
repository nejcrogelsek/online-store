import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MobileSubCatLinks from "./MobileSubCatLinks/MobileSubCatLinks";

const MobileSubCatLinkBox = ({
  subcatTitle,
  dropdown,
  inner_subcat,
  showMobileNav,
  setShowMobileNav,
}) => {
  const [openSubCat, setOpenSubCat] = useState(false);

  const toggleSubCat = () => {
    setOpenSubCat(!openSubCat);
  };
  const toggleMobileNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <>
      {dropdown ? (
        <li className='mn-item'>
          <NavLink
            className='nav-link'
            to='/category/neki'
            onClick={toggleMobileNavigation}>
            {subcatTitle}
          </NavLink>
          <div className='mn-sublist-toggle' onClick={toggleSubCat}>
            <ChevronRightIcon />
          </div>
          <ul className={openSubCat ? "mn-list active" : "mn-list"}>
            <div className='parentCat'>
              <div className='mn-sublist-toggle' onClick={toggleSubCat}>
                <ChevronLeftIcon />
              </div>
              <span>{subcatTitle}</span>
            </div>
            {inner_subcat.map(({ subcat_name }) => (
              <MobileSubCatLinks
                key={uuidv4()}
                title={subcatTitle}
                subcat_name={subcat_name}
                showMobileNav={showMobileNav}
                setShowMobileNav={setShowMobileNav}
              />
            ))}
          </ul>
        </li>
      ) : (
        <li className='mn-item'>
          <NavLink
            className='nav-link'
            to='/category/neki'
            onClick={toggleMobileNavigation}>
            {subcatTitle}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default MobileSubCatLinkBox;
