import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MobileSubCatLinkBox from "./MobileSubCatLinkBox/MobileSubCatLinkBox";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const MobileNavLinkBox = ({ name, dropdown, subcat }) => {
  const [openSubCat, setOpenSubCat] = useState(false);

  const toggleSubCat = () => {
    setOpenSubCat(!openSubCat);
  };
  return (
    <>
      {dropdown ? (
        <li className='mn-item'>
          <Link className='nav-link' to='/category/neki'>
            {name}
          </Link>
          <div className='mn-sublist-toggle' onClick={toggleSubCat}>
            <ChevronRightIcon />
          </div>
          <ul className={openSubCat ? "mn-list active" : "mn-list"}>
            <li className='mn-list parentCat'>
              <div className='mn-sublist-toggle' onClick={toggleSubCat}>
                <ChevronLeftIcon />
              </div>
              <span>{name}</span>
            </li>
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
