import "./TrackOrderFooter.css";

import {
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function TrackOrderFooter({ data }) {
  return (
    <footer className="track-footer">

      <div className="track-footer-left">

        <div className="track-footer-item">
          <Mail size={16} />
          <span>{data.email}</span>
        </div>

        <div className="track-footer-item">
          <Phone size={16} />
          <span>{data.phone}</span>
        </div>

      </div>

      <div className="track-footer-right">

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>

      </div>

    </footer>
  );
}

export default TrackOrderFooter;