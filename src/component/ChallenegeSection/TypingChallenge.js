import React from "react";
import classes from "./TypingChallenge.module.css";

const TypingChallenge = ({
  selectedParagraph,
  timeRemaining,
  timeStarted,
  testInfo,
}) => {
  return (
    <div className={classes["typing-challenge"]}>
      <div className={classes["timer-container"]}>
        <p className={classes.timer}>
          00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className={classes["timer-info"]}>
          {!timeStarted && "Start typing the test"}
        </p>
      </div>
      <div className={classes["textarea-container"]}>
        <div className={classes["textarea-left"]}>
          <div className={`${classes.textarea} ${classes["test-paragraph"]}`}>
            {selectedParagraph}
          </div>
        </div>
        <div className={classes["textarea-right"]}>
          <textarea
            className={classes.textarea}
            placeholder="start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
