import React, { useState } from "react";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { Link } from "react-router-dom";
import CustomSelect from "../../CustomSelect";

const TopNavbar = () => {
  // for languages and currency I will use SELECT
  const [user, setUser] = useState(false);
  const [languages, setLanguages] = useState([
    { code: "EN", name: "England" },
    { code: "SL", name: "Slovenia" },
    { code: "DE", name: "Germany" },
  ]);
  const [currency, setCurrency] = useState([
    { code: "EURO", name: "Euro" },
    { code: "USD", name: "United States Dollars" },
    { code: "JP", name: "Jen" },
  ]);
  console.log(languages);
  return (
    <div id='topNavbar'>
      <div className='call'>
        <PhoneInTalkIcon />
        <span>Call us </span>
        <a href='tel:000000000'>
          070-070-070
        </a>
      </div>
      <div className='top-links'>
        <ul>
          {user ? (
            <li>
              <Link to='/profile'>My Account</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
          <li>
            <CustomSelect values={languages} />
          </li>
          <li>
            <CustomSelect values={currency} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
