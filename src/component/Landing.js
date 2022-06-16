import React from "react";
import classes from "./Landing.module.css";
import flash from "../assets/flash.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className={classes["landing-container"]}>
      <div data-aos="fade-right" className={classes["landing-left"]}>
        <h1 className={classes["landing-header"]}>Can you type...</h1>
        <div className={classes["typwriter-container"]}>
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className={classes["landing-right"]}>
        <img
          data-aos="fade-left"
          className={classes["flash-image"]}
          src={flash}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Landing;
