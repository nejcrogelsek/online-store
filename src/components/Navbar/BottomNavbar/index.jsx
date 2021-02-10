import React, { useEffect, useState } from "react";
import NavLinkBox from "./NavLinkBox/NavLinkBox";
import { useSelector } from "react-redux";
import { cat_subcat_select } from "../../../features/cat_subcat/cat_subcatSlice";

const BottomNavbar = () => {
  const cat_subcat_selector = useSelector(cat_subcat_select);
  const [isDesktop, setIsDesktop] = useState(false);

  const checkIfMobile = () => {
    if (window.innerWidth > 991) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 991) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  return (
    <nav className='navbar' id='bottomNavbar'>
      {isDesktop && (
        <>
          {cat_subcat_selector.map(({ name, dropdown, subcat }) => (
            <NavLinkBox
              key={name}
              name={name}
              dropdown={dropdown}
              subcat={subcat}
            />
          ))}
        </>
      )}
    </nav>
  );
};

export default BottomNavbar;
