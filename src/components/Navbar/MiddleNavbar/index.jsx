import React, { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const MiddleNavbar = () => {
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const startSearch = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div id='middleNavbar'>
      <div className='header-logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='content'>
        {isMobile ? (
          <div className='menu-wrapper'>
            <MenuIcon />
          </div>
        ) : (
          <div className='search-box'>
            <div className='search-box-wrapper'>
              <input
                type='text'
                name='search'
                id='search'
                value={search}
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
          <div className='shopping-cart'>
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
