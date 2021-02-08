import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SubCatLinkBox = ({ title, subcat }) => {
  return (
    <div className='column'>
      <h3>{title}</h3>
      {subcat.map(({ subcat_name }) => (
        <Link key={uuidv4()} to='#'>
          {subcat_name}
        </Link>
      ))}
    </div>
  );
};

export default SubCatLinkBox;
