import React from "react";
import TryAgain from "./TryAgain";
import classes from "./TestContainer.module.css";

const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className={classes["test-container"]}>
      <div className={classes["try-again-cont"]}>
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>
    </div>
  );
};

export default TestContainer;
