import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <a
        href="https://theleanprogrammer.com/aam"
        className={classes["footer-link"]}
        target="_blank"
        rel="noreferrer"
      >
        Watch the full react course now!!
      </a>
    </div>
  );
};

export default Footer;
