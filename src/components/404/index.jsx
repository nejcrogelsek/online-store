import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import PageNotFound from "../../assets/images/404.jpg";

const NotFound404 = () => {
  return (
    <div id='NotFound404'>
      <div className='row'>
        <div className='col-md-6 content-404'>
          <h2>
            Sorry, the page you were looking for{" "}
            <span>could not be found.</span>
          </h2>
          <p>You can return to our homepage or contact us.</p>
          <Link to='/'>
            <HomeIcon />
            Return to the home page{" "}
          </Link>
        </div>
        <div className='col-md-6 picture-404'>
          <img src={PageNotFound} alt='404 Page Not Found' />
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
