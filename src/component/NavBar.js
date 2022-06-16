import React from "react";
import classes from "./navBar.module.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className={classes["nav-container"]}>
      <div className={classes["nav-left"]}>
        <img className={classes["flash-logo"]} src={logo} alt="logo" />
        <p className={classes["logo-text"]}>FlashType</p>
      </div>
      <div className={classes["nav-right"]}>
        <a
          target="_blank"
          className={classes["nav-aam-link"]}
          href="https://theleanprogrammer.com/aam"
          rel="noreferrer"
        >
          AAM
        </a>
      </div>
    </div>
  );
};

export default NavBar;
