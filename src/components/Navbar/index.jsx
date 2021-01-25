import React from "react";
import BottomNavbar from "./BottomNavbar";
import MiddleNavbar from "./MiddleNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <header className='container'>
      <TopNavbar />
      <MiddleNavbar />
      <BottomNavbar />
    </header>
  );
};

export default Navbar;
