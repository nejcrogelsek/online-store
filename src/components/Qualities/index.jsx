import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SecurityIcon from "@material-ui/icons/Security";
import ScheduleIcon from "@material-ui/icons/Schedule";

const Qualities = () => {
  return (
    <div id='qualities' className='row'>
      <div className='col-12 col-md-6 col-lg-3 quality'>
        <PublicIcon />
        <span className='quality-title'>free shipping</span>
        <span className='quality-description'>on order over $500</span>
      </div>
      <div className='col-12 col-md-6 col-lg-3 quality'>
        <PeopleOutlineIcon />
        <span className='quality-title'>support</span>
        <span className='quality-description'>life time support 24/7</span>
      </div>
      <div className='col-12 col-md-6 col-lg-3 quality'>
        <SecurityIcon />
        <span className='quality-title'>safe purchase</span>
        <span className='quality-description'>
          Never save credit card information
        </span>
      </div>
      <div className='col-12 col-md-6 col-lg-3 quality'>
        <ScheduleIcon />
        <span className='quality-title'>fast delivery</span>
        <span className='quality-description'>on order over $500</span>
      </div>
    </div>
  );
};

export default Qualities;
