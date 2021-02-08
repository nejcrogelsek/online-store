import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

const MobileSubCatLinks = ({ title, subcat_name }) => {
  return (
    <li className='mn-item'>
      <Link className='nav-link' to='/category/neki'>
        {subcat_name}
      </Link>
    </li>
  );
};

export default MobileSubCatLinks;
