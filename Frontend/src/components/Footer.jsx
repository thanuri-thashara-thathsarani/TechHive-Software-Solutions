import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <span className="brand-icon">TH</span>

            <span className="brand-text">
              <strong>TechHive</strong>
              <small>Software Solutions</small>
            </span>
          </Link>

          <p>
            We create secure, modern and innovative digital solutions that help
            businesses grow.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <span>Website Development</span>
          <span>Mobile Applications</span>
          <span>Cybersecurity</span>
          <span>Cloud Solutions</span>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <span>info@techhive.com</span>
          <span>+61 400 000 000</span>
          <span>ABN: 12 345 678 901</span>
          <span>PayPal · Visa · MasterCard</span>
        </div>
    <div className="footer-column">
  <h3>Follow Us</h3>

  <a href="https://facebook.com" className="social-link">
    <FaFacebookF /> Facebook
  </a>

  <a href="https://instagram.com" className="social-link">
    <FaInstagram /> Instagram
  </a>

  <a href="https://linkedin.com" className="social-link">
    <FaLinkedinIn /> LinkedIn
  </a>

  <a href="https://x.com" className="social-link">
    <FaXTwitter /> X
  </a>

  <a href="https://youtube.com" className="social-link">
    <FaYoutube /> YouTube
  </a>
</div>
</div> {/* footer-container */}
<div className="footer-bottom"></div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} TechHive Software Solutions. All rights
          reserved.
        </p>
        <p className="assignment-disclaimer">
    This website is for a class assignment project and not for commercial purpose.
  </p>
      </div>
    </footer>
  );
}

export default Footer;