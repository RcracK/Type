import React from "react";
import TestContainer from "./TestContainer";
import classes from "./ChallengeSection.module.css";

const ChallengeSection = () => {
  return (
    <div className={classes["challenge-section-container"]}>
      <h1 data-aos="fade-down" className={classes["challenge-section-header"]}>
        Take Speed Test Now!!
      </h1>
      <TestContainer words={4} characters={14} wpm={20} />
    </div>
  );
};

export default ChallengeSection;
