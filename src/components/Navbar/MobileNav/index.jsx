import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cat_subcat_select } from "../../../features/cat_subcat/cat_subcatSlice";
import Logo from "../../../assets/images/logo.svg";
import CloseIcon from "@material-ui/icons/Close";
import MobileNavLinkBox from "./MobileNavLinkBox/MobileNavLinkBox";
import { Link } from "react-router-dom";

const MobileNav = ({ showMobileNav, setShowMobileNav }) => {
  const cat_subcat_selector = useSelector(cat_subcat_select);

  const toggleMobileNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <div id='mobileNav' className={showMobileNav ? "mobileNav-active" : null}>
        <div className='mn-top'>
          <div className='logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <CloseIcon
            className='mn-close-icon'
            onClick={toggleMobileNavigation}
          />
        </div>
        <div className='mn-bottom'>
          <ul className='mn-list'>
            {cat_subcat_selector.map(({ name, dropdown, subcat }) => (
              <MobileNavLinkBox
                key={name}
                name={name}
                dropdown={dropdown}
                subcat={subcat}
                showMobileNav={showMobileNav}
                setShowMobileNav={setShowMobileNav}
              />
            ))}
            <li className='mn-sublist-item'>
              <Link
                className='mn-item'
                to='/gifts'
                onClick={toggleMobileNavigation}>
                Gifts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id='mobileLayer'
        className={showMobileNav ? "mobileLayer-active" : null}></div>
    </>
  );
};

export default MobileNav;
