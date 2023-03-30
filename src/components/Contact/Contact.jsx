import React from "react";
import "./Contact.scss";
import { Face, Facebook, Instagram, Twitter } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Contact;
