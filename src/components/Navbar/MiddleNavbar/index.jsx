import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "../MobileNav";
import Autocomplete from "../Autocomplete";

const MiddleNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const checkIfMobile = () => {
    if (window.innerWidth > 991) {
      setIsMobile(false);
      setOpenSearch(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 991) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMobileNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <>
      <div id='middleNavbar'>
        <div className='header-logo'>
          <NavLink to='/'>
            <img src={Logo} alt='Logo' />
          </NavLink>
        </div>
        <div className='content'>
          {isMobile ? (
            <div className='menu-wrapper'>
              <MenuIcon onClick={toggleMobileNavigation} />
            </div>
          ) : (
            <Autocomplete
              openSearch={openSearch}
              setOpenSearch={setOpenSearch}
              isMobile={isMobile}
            />
          )}
          <div className='middle-buttons'>
            {isMobile && (
              <Autocomplete
                openSearch={openSearch}
                setOpenSearch={setOpenSearch}
                isMobile={isMobile}
              />
            )}
            <Link to='/cart' className='cart-button'>
              <div className='shopping-cart'>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <MobileNav
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
};

export default MiddleNavbar;
