import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <img
            src="/logos/logo.jpg"
            alt="Two Brothers"
          />

        </div>

        <div className="footer-center">

          <h2>
            THE ORGANIC WAY OF LIFE
          </h2>

          <p>
            Subscribe for special offers,
            newsletters and become a
            part of our movement
          </p>

          <div className="footer-newsletter">

            <input
              type="email"
              placeholder="Your e-mail"
            />

            <button>
              →
            </button>

          </div>

          <div className="footer-links">

            <span>CATEGORIES</span>

            <span>GENERAL</span>

            <span>CONNECT</span>

          </div>

          <div className="footer-social">

            <FaFacebookF />

            <FaInstagram />

            <FaYoutube />

            <FaLinkedinIn />

          </div>

          <div className="footer-apps">

            <img
              src="/footer/google-play.JPG"
              alt="Google Play"
            />

            <img
              src="/footer/app-store.JPG"
              alt="App Store"
            />

          </div>

        </div>

        <div className="footer-info">

          <p>
            TBOF FOODS PRIVATE LIMITED
            (Two Brothers Organic Farms India)
          </p>

          <p>
            (CIN):
            U01110PN2019TC182942
          </p>

          <p>
            11th FLOOR, N-1104,
            JASMINIUM BUILDING,
            MAGARPATTA CITY,
            HADAPSAR, Pune,
            Maharashtra, 411028
          </p>

          <p>
            Email:
            info@twobrothersindia.com
          </p>

          <p>
            Tel:
            7406753753
          </p>

          <p>
            Grievances:
            7406753753
          </p>

        </div>

      </div>

      <div className="footer-bottom-shape"></div>

    </footer>
  );
}

export default Footer;