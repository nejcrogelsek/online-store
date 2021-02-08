import React, { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav";

const MiddleNavbar = () => {
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const startSearch = () => {
    console.log("SEARCH FUNCTION");
    setIsMobile(!isMobile);
  };

  const toggleMobileNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <>
      <div id='middleNavbar'>
        <div className='header-logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='content'>
          {isMobile ? (
            <div className='menu-wrapper'>
              <MenuIcon onClick={toggleMobileNavigation} />
            </div>
          ) : (
            <div className='search-box'>
              <div className='search-box-wrapper'>
                <input
                  type='text'
                  name='search'
                  id='search'
                  value={search}
                  placeholder='Search...'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' onClick={startSearch}>
                  Search
                </button>
              </div>
            </div>
          )}
          <div className='middle-buttons'>
            {isMobile && <SearchIcon />}
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
