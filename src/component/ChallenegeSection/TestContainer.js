import React from "react";
import TryAgain from "./TryAgain";
import classes from "./TestContainer.module.css";
import TypingChallengeContainer from "./TypingChallengeContainer";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timeStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className={classes["test-container"]}>
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className={classes["typing-challenge-cont"]}>
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            timeRemaining={timeRemaining}
            timeStarted={timeStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className={classes["try-again-cont"]}>
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
