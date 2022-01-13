import "./Footer.css"
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col-1">
        <div className="footer-logo-container">
          <Logo fill="white"/>
        </div>
        <div className="footer-socials-container">
          <ul className="footer-socials-list">
            <li className="footer-social-item">
              <Facebook />
            </li>
            <li className="footer-social-item">
              <Youtube />
            </li>
            <li className="footer-social-item">
              <Twitter />
            </li>
            <li className="footer-social-item">
              <Pinterest />
            </li>
            <li className="footer-social-item">
              <Instagram />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-col-2">
        <ul className="footer-nav-links">
          <li className="footer-nav-link-item">About Us</li>
          <li className="footer-nav-link-item">Contact</li>
          <li className="footer-nav-link-item">Blog</li>
        </ul>
      </div>
      <div className="footer-col-3">
        <ul className="footer-nav-links">
          <li className="footer-nav-link-item">Careers</li>
          <li className="footer-nav-link-item">Support</li>
          <li className="footer-nav-link-item">Privacy Policy</li>
        </ul>
      </div>
      <div className="padding"></div>
      <div className="footer-col-5">
          <button>Request Invite</button>
          <p>Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
