import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const SimpleBreadcrumb = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("You clicked a breadcrumb.");
  };
  return (
    <div className='breadcrumb breadcrumb-simple'>
      <Breadcrumbs aria-label='breadcrumb' className='breadcrumb-nav-wrapper'>
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
  );
};

export default SimpleBreadcrumb;
