import React, { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const MiddleNavbar = () => {
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const startSearch = () => {
    console.log("jojojojojoo");
  };
  return (
    <div id='middleNavbar'>
      {isMobile && (
        <div className='menu-wrapper'>
          <MenuIcon />
        </div>
      )}
      <div className='header-logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='search-box'>
        <input
          type='text'
          name='search'
          id='search'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' onClick={startSearch}>
          Search
        </button>
      </div>
      <div className='middle-buttons'>
        {isMobile && <SearchIcon />}
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
};

export default MiddleNavbar;
