import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-icon.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Footer = () => {
  const infoRef = useRef();
  const customerServiceRef = useRef();
  const myAccountRef = useRef();
  const termsAndConditionsRef = useRef();
  const [info, setInfo] = useState(false);
  const [customerService, setCustomerService] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const openInfo = () => {
    setInfo(!info);
  };
  const openCustomerService = () => {
    setCustomerService(!customerService);
  };
  const openMyAccount = () => {
    setMyAccount(!myAccount);
  };
  const openTermsAndConditions = () => {
    setTermsAndConditions(!termsAndConditions);
  };

  return (
    <footer id='footer'>
      <div className='container'>
        <div id='topFooter'>
          <div className='row'>
            <div className='col-md-3'>
              <div className={info ? "footer-block openInfo" : "footer-block"}>
                <h5 onClick={openInfo}>
                  Informacije{" "}
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </h5>
                <ul
                  ref={infoRef}
                  style={
                    info
                      ? { height: infoRef.current.scrollHeight + "px" }
                      : { height: "0px" }
                  }>
                  <li>
                    <Link to='/'>Sitemap</Link>
                  </li>
                  <li>
                    <Link to='/'>Privacy & Personal Data Protection</Link>
                  </li>
                  <li>
                    <Link to='/'>Payment Methods</Link>
                  </li>
                  <li>
                    <Link to='/'>Purchase Process</Link>
                  </li>
                  <li>
                    <Link to='/'>Special Offers</Link>
                  </li>
                  <li>
                    <Link to='/'>Returns</Link>
                  </li>
                  <li>
                    <Link to='/'>Jobs</Link>
                  </li>
                  <li>
                    <Link to='/'>Shipping</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <div
                className={
                  customerService
                    ? "footer-block openCustomerService"
                    : "footer-block"
                }>
                <h5 onClick={openCustomerService}>
                  Customer Service
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </h5>
                <ul
                  ref={customerServiceRef}
                  style={
                    customerService
                      ? {
                          height:
                            customerServiceRef.current.scrollHeight + "px",
                        }
                      : { height: "0px" }
                  }>
                  <li>
                    <Link to='/'>Search</Link>
                  </li>
                  <li>
                    <Link to='/'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/'>Contact Us</Link>
                  </li>
                  <li>
                    <a href='tel:+38640123123'>+386 40 123 123</a>
                  </li>
                  <li>
                    <a href='mailto:test@test.com'>test@test.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <div
                className={
                  myAccount ? "footer-block openMyAccount" : "footer-block"
                }>
                <h5 onClick={openMyAccount}>
                  My Account
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </h5>
                <ul
                  ref={myAccountRef}
                  style={
                    myAccount
                      ? { height: myAccountRef.current.scrollHeight + "px" }
                      : null
                  }>
                  <li>
                    <Link to='/'>My Account</Link>
                  </li>
                  <li>
                    <Link to='/'>My Orders</Link>
                  </li>
                  <li>
                    <Link to='/'>My Shipping Addresses</Link>
                  </li>
                  <li>
                    <Link to='/'>Shopping Cart</Link>
                  </li>
                  <li>
                    <Link to='/'>Wishlist</Link>
                  </li>
                  <li>
                    <Link to='/'>About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <div
                className={
                  termsAndConditions
                    ? "footer-block openTermsAndConditions"
                    : "footer-block"
                }>
                <h5 onClick={openTermsAndConditions}>
                  General Terms And Conditions
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </h5>
                <ul
                  ref={termsAndConditionsRef}
                  style={
                    termsAndConditions
                      ? {
                          height:
                            termsAndConditionsRef.current.scrollHeight + "px",
                        }
                      : { height: "0px" }
                  }>
                  <li>
                    <Link to='/'>Security regulations</Link>
                  </li>
                  <li>
                    <Link to='/'>General Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id='bottomFooter'>
          <Link to='/'>
            <div className='picture'>
              <img src={Logo} alt='Logo' />
              <span>Redpoint</span>
            </div>
          </Link>
          <div className='socials'>
            <a href='#' rel='noreferrer' target='_blank'>
              <FacebookIcon className='facebook-icon' />
            </a>
            <a href='#' rel='noreferrer' target='_blank'>
              <InstagramIcon className='instagram-icon' />
            </a>
            <a href='#' rel='noreferrer' target='_blank'>
              <TwitterIcon className='twitter-icon' />
            </a>
          </div>
          <div className='authors'>
            <span>
              Authors:{" "}
              <a
                href='https://nejcrogelsek.si'
                rel='noreferrer'
                target='_blank'>
                Nejc Rogelšek
              </a>
            </span>
          </div>
          <div className='copyright'>
            <span>Copyright © 2021 commerce.js, All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
