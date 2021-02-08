import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MobileSubCatLinks from "./MobileSubCatLinks/MobileSubCatLinks";

const MobileSubCatLinkBox = ({ subcatTitle, inner_subcat, name }) => {
  return (
    <li className='mn-sublist-item'>
      <div className='parentCat'>
        <ChevronLeftIcon />
        {name}
      </div>

      <Link className='nav-link' to='/category/neki'>
        {subcatTitle}
      </Link>
      <div className='mn-sublist-toggle'>
        <ChevronRightIcon />
      </div>
      <ul className='mn-sublist'>
        <div className='parentCat'>
          <ChevronLeftIcon />
          {subcatTitle}
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
