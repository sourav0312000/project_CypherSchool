import React from "react";
import "./Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__navig">
          <button onClick={scrollTop}>Back to Top</button>
        </div>
        <ul className="footer__list">
          <li>Get to Know Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </ul>
        <ul className="footer__list">
          <li>Connect with Us</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <ul className="footer__list">
          <li>Make Money with Us</li>
          <li>Sell on Amazon</li>
          <li>Sell Under Amazon Accelerator</li>
          <li>Become a Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise your Products</li>
        </ul>
        <ul className="footer__list">
          <li>Let Us Help You</li>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Amazon Assistant Download</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;