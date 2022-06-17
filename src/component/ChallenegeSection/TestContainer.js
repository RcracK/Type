import React from "react";
import TryAgain from "./TryAgain";
import classes from "./TestContainer.module.css";
import TypingChallengeContainer from "./TypingChallengeContainer";

const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className={classes["test-container"]}>
      <div data-aos="fade-up" className={classes["typing-challenge-cont"]}>
        <TypingChallengeContainer
          words={words}
          characters={characters}
          wpm={wpm}
        />
      </div>
      {/*<div className={classes["try-again-cont"]}>
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>*/}
    </div>
  );
};

export default TestContainer;
