import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer__container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Reve real estate is a multilingual company located in Dubai,
              London and Beirut. We connected buyers and sellers for the past 10
              years. We supply our clients with various services ranging from
              real estate brokerage, buyer-seller cooperation to investment and
              development consultancy.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Support</h6>
            <ul className="footer-links">
              <li>
                <a href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/mortgage">
                  Mortgage Services
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/offplan">Off Plan</a>
              </li>
              <li>
                <a href="/residential">Residential</a>
              </li>
              <li>
                <a href="/commercial">
                  Commercial
                </a>
              </li>
              <li>
                <a href="/holidayhomes">Holiday Homes</a>
              </li>
              <li>
                <a href="/mortgage">Mortgage Services</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="footer__copyrights">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="#"> REVE MEA </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/profile.php?id=100077121187309"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="Instagram"
                  href="https://www.instagram.com/reve.mea/"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/company/revemea/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
