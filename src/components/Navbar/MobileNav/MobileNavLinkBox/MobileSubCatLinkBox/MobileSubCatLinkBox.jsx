import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MobileSubCatLinks from "./MobileSubCatLinks/MobileSubCatLinks";

const MobileSubCatLinkBox = ({ subcatTitle, inner_subcat, name }) => {
  const [openSubCat, setOpenSubCat] = useState(false);

  const toggleSubCat = () => {
    setOpenSubCat(!openSubCat);
  };
  return (
    <li className='mn-item'>
      <Link className='nav-link' to='/category/neki'>
        {subcatTitle}
      </Link>
      <div className='mn-sublist-toggle' onClick={toggleSubCat}>
        <ChevronRightIcon />
      </div>
      <ul className={openSubCat ? "mn-list active" : "mn-list"}>
        <div className='parentCat'>
          <div className='mn-sublist-toggle' onClick={toggleSubCat}>
            <ChevronLeftIcon />
          </div>
          <span>{subcatTitle}</span>
        </div>
        {inner_subcat.map(({ subcat_name }) => (
          <MobileSubCatLinks
            key={uuidv4()}
            title={subcatTitle}
            subcat_name={subcat_name}
          />
        ))}
      </ul>
    </li>
  );
};

export default MobileSubCatLinkBox;
