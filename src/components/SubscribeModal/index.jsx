import React, { useState, useCallback, useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Image from "../../assets/images/subscribe-email.png";
import CloseIcon from "@material-ui/icons/Close";

const SubscribeModal = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");

  const addNewMember = (e) => {
    e.preventDefault();
    console.log("New member added");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div id='subscribe-modal'>
      <div className='subscribe-wrapper'>
        <button className='close-subscribe-modal' onClick={closeModal}>
          <CloseIcon />
        </button>
        <div className='content'>
          <h3>Join Our Mailing List</h3>
          <p className='first'>
            Pellentesque de fermentum mollis comodous an loremous
          </p>
          <form onSubmit={addNewMember}>
            <input
              type='email'
              name='member-email'
              id='memberEmailInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button disabled={!email} type='submit'>
              Subscribe email
            </button>
          </form>
          <p className='second'>
            <strong>
              SIGN UP FOR EXCLUSIVE UPDATES, NEW ARRIVALS AND INSIDER-ONLY
              DISCOUNTS
            </strong>
          </p>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/'
                rel='noreferrer'
                target='_blank'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/'
                rel='noreferrer'
                target='_blank'>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/' rel='noreferrer' target='_blank'>
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className='picture'>
          <img src={Image} alt='Subscribe' />
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
