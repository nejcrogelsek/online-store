import React, { useState } from "react";
import NavLinkBox from "./NavLinkBox/NavLinkBox";
import MenuIcon from "@material-ui/icons/Menu";

const BottomNavbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const [testData, setTestData] = useState([
    {
      name: "Man",
      dropdown: true,
      subcat: [
        {
          title: "Man Shoes",
          inner_subcat: [
            {
              subcat_name: "shoes1",
            },
            {
              subcat_name: "shoes2",
            },
            {
              subcat_name: "shoes3",
            },
            {
              subcat_name: "shoes4",
            },
          ],
        },
        {
          title: "Man Clothes",
          inner_subcat: [
            {
              subcat_name: "clothes1",
            },
            {
              subcat_name: "clothes2",
            },
            {
              subcat_name: "clothes3",
            },
            {
              subcat_name: "clothes4",
            },
          ],
        },
        {
          title: "Man Underwear",
          inner_subcat: [
            {
              subcat_name: "underwear1",
            },
            {
              subcat_name: "underwear1",
            },
            {
              subcat_name: "underwear1",
            },
            {
              subcat_name: "underwear1",
            },
          ],
        },
        {
          title: "Other",
          inner_subcat: [
            {
              subcat_name: "Watches",
            },
            {
              subcat_name: "Sunglasses",
            },
            {
              subcat_name: "Wallet",
            },
          ],
        },
      ],
    },
    {
      name: "Women",
      dropdown: true,
      subcat: [
        {
          title: "Women Shoes",
          inner_subcat: [
            {
              subcat_name: "shoes1",
            },
            {
              subcat_name: "shoes2",
            },
            {
              subcat_name: "shoes3",
            },
            {
              subcat_name: "shoes4",
            },
          ],
        },
        {
          title: "Women Clothes",
          inner_subcat: [
            {
              subcat_name: "clothes1",
            },
            {
              subcat_name: "clothes2",
            },
            {
              subcat_name: "clothes3",
            },
            {
              subcat_name: "clothes4",
            },
          ],
        },
        {
          title: "Women Underwear",
          inner_subcat: [
            {
              subcat_name: "underwear1",
            },
            {
              subcat_name: "underwear1",
            },
            {
              subcat_name: "underwear1",
            },
            {
              subcat_name: "underwear1",
            },
          ],
        },
        {
          title: "Other",
          inner_subcat: [
            {
              subcat_name: "Watches",
            },
            {
              subcat_name: "Sunglasses",
            },
            {
              subcat_name: "Wallet",
            },
          ],
        },
      ],
    },
    { name: "Furniture", dropdown: false },
    { name: "Computer equipment", dropdown: false },
    { name: "Accessories", dropdown: false },
    { name: "Other products", dropdown: false },
    { name: "Reduced prices", dropdown: false },
    {
      name: "More",
      dropdown: true,
      subcat: [
        {
          title: "main1",
          inner_subcat: [
            {
              subcat_name: "krneki1",
            },
            {
              subcat_name: "krneki2",
            },
            {
              subcat_name: "krneki3",
            },
            {
              subcat_name: "krneki4",
            },
          ],
        },
        {
          title: "main2",
          inner_subcat: [
            {
              subcat_name: "krneki1",
            },
            {
              subcat_name: "krneki2",
            },
            {
              subcat_name: "krneki3",
            },
            {
              subcat_name: "krneki4",
            },
          ],
        },
        {
          title: "main3",
          inner_subcat: [
            {
              subcat_name: "krneki1",
            },
            {
              subcat_name: "krneki2",
            },
            {
              subcat_name: "krneki3",
            },
            {
              subcat_name: "krneki4",
            },
          ],
        },
        {
          title: "main4",
          inner_subcat: [
            {
              subcat_name: "krneki1",
            },
            {
              subcat_name: "krneki2",
            },
            {
              subcat_name: "krneki3",
            },
          ],
        },
      ],
    },
  ]);

  return (
    <nav className='navbar' id='bottomNavbar'>
      {isDesktop && (
        <>
          {testData.map(({ name, dropdown, subcat }) => (
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
