import React, { useState } from "react";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  // for languages and currency I will use SELECT
  const [user, setUser] = useState(false);
  return (
    <div id='topNavbar'>
      <div className='call'>
        <PhoneInTalkIcon />
        <a href='tel:000000000'>
          Call us <span>070-070-070</span>
        </a>
      </div>
      <div className='top-links'>
        <ul>
          {user ? (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to='/profile'>My Account</Link>
            </li>
          )}
          <li>EN v</li>
          <li>USD v</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
