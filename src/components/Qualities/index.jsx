import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SecurityIcon from "@material-ui/icons/Security";
import ScheduleIcon from "@material-ui/icons/Schedule";

const index = () => {
  return (
    <div id='qualities'>
      <div className='quality'>
        <PublicIcon />
        <span>free shipping</span>
        <span>on order over $500</span>
      </div>
      <div className='quality'>
        <PeopleOutlineIcon />
        <span>support</span>
        <span>life time support 24/7</span>
      </div>
      <div className='quality'>
        <SecurityIcon />
        <span>safe purchase</span>
        <span>Never save credit card information</span>
      </div>
      <div className='quality'>
        <ScheduleIcon />
        <span>fast delivery</span>
        <span>on order over $500</span>
      </div>
    </div>
  );
};

export default index;
