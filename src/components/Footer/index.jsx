import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-icon.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div id='topFooter'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='footer-block'>
                <h5>Informacije</h5>
                <ul>
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
              <div className='footer-block'>
                <h5>Customer Service</h5>
                <ul>
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
              <div className='footer-block'>
                <h5>My Account</h5>
                <ul>
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
              <div className='footer-block'>
                <h5>General Terms And Conditions</h5>
                <ul>
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
          <div className='picture'>
            <img src={Logo} alt='Logo' />
            <span>Redpoint</span>
          </div>
          <div className='socials'>
            <a href='#' target='_blank'>
              <FacebookIcon className='facebook-icon' />
            </a>
            <a href='#' target='_blank'>
              <InstagramIcon className='instagram-icon' />
            </a>
            <a href='#' target='_blank'>
              <TwitterIcon className='twitter-icon' />
            </a>
          </div>
          <div className='authors'>
            <span>
              Authors:{" "}
              <a href='https://nejcrogelsek.si' target='_blank'>
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
