import React from "react";
import BottomNavbar from "./BottomNavbar";
import MiddleNavbar from "./MiddleNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <TopNavbar />
        <MiddleNavbar />
        <BottomNavbar />
      </div>
    </header>
  );
};

export default Navbar;
