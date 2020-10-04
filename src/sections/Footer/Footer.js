import React from "react";

import "./Footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="links">
        <a
          href="https://www.facebook.com/newvektorgroup/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQC5Odc4jDM9E2Ez9LV1TZQ"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <a
          href="https://t.me/newvektorchannel"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTelegram />
        </a>
      </div>
      <h4>Developed By NVG team</h4>
      <h5>© Copyright 2015-2020</h5>
    </footer>
  );
};

export default Footer;
