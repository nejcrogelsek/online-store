import React, { useState } from "react";
import NavLinkBox from "./NavLinkBox/NavLinkBox";

const BottomNavbar = () => {
  const [testData, setTestData] = useState([
    { name: "Man", dropdown: true },
    { name: "Women", dropdown: false },
    { name: "Furniture", dropdown: false },
    { name: "Computer equipment", dropdown: true },
    { name: "Accessories", dropdown: false },
    { name: "Other products", dropdown: false },
    { name: "Reduced prices", dropdown: false },
    { name: "More", dropdown: true },
  ]);

  return (
    <nav className='navbar' id='bottomNavbar'>
      {testData.map(({ name, dropdown }) => (
        <NavLinkBox key={name} name={name} dropdown={dropdown} />
      ))}
    </nav>
  );
};

export default BottomNavbar;
