import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MobileSubCatLinkBox from "./MobileSubCatLinkBox/MobileSubCatLinkBox";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const MobileNavLinkBox = ({
  name,
  dropdown,
  subcat,
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
            {name}
          </NavLink>
          <div className='mn-sublist-toggle' onClick={toggleSubCat}>
            <ChevronRightIcon />
          </div>
          <ul className={openSubCat ? "mn-list active" : "mn-list"}>
            <li className='mn-list parentCat'>
              <div className='mn-sublist-toggle' onClick={toggleSubCat}>
                <ChevronLeftIcon />
              </div>
              <span>{name}</span>
            </li>
            {subcat.map(({ title, inner_dropdown, inner_subcat }) => (
              <MobileSubCatLinkBox
                key={uuidv4()}
                subcatTitle={title}
                dropdown={inner_dropdown}
                inner_subcat={inner_subcat}
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
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default MobileNavLinkBox;
