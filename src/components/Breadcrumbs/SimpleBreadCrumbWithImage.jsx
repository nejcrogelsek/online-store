import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Art1 from "../../assets/images/breadcrumb/art1.jpg";

const SimpleBreadCrumbWithImage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("You clicked a breadcrumb.");
  };
  return (
    <div className='breadcrumb breadcrumb-custom'>
      <img className='bc-backgroundImage' src={Art1} alt='art1' />
      <div className='container'>
        <Breadcrumbs
          aria-label='breadcrumb-custom'
          className='breadcrumb-nav-wrapper'>
          <Link color='inherit' href='/' onClick={handleClick}>
            Material-UI
          </Link>
          <Link
            color='inherit'
            href='/getting-started/installation/'
            onClick={handleClick}>
            Core
          </Link>
          <Typography color='textPrimary'>Breadcrumb</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default SimpleBreadCrumbWithImage;
