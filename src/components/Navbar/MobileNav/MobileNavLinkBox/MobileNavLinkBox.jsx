import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MobileSubCatLinkBox from "./MobileSubCatLinkBox/MobileSubCatLinkBox";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const MobileNavLinkBox = ({ name, dropdown, subcat }) => {
  return (
    <>
      {dropdown ? (
        <li className='mn-item'>
          <Link className='nav-link' to='/category/neki'>
            {name}
          </Link>
          <div className='mn-sublist-toggle'>
            <ChevronRightIcon />
          </div>
          <ul className='mn-sublist'>
            {subcat.map(({ title, inner_subcat }) => (
              <MobileSubCatLinkBox
                key={uuidv4()}
                subcatTitle={title}
                inner_subcat={inner_subcat}
                name={name}
              />
            ))}
          </ul>
        </li>
      ) : (
        <li className='mn-item'>
          <Link className='nav-link' to='/category/neki'>
            {name}
          </Link>
        </li>
      )}
    </>
  );
};

export default MobileNavLinkBox;
