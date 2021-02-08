import React from "react";
import { Link } from "react-router-dom";

const SubCatLinkBox = ({ title, subcat }) => {
  return (
    <div className='column'>
      <h3>{title}</h3>
      {subcat.map(({ subcat_name }) => (
        <Link key={title} to='#'>
          {subcat_name}
        </Link>
      ))}
    </div>
  );
};

export default SubCatLinkBox;
