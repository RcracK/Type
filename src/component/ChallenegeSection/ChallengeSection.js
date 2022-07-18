import React from "react";
import TestContainer from "./TestContainer";
import classes from "./ChallengeSection.module.css";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timeStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className={classes["challenge-section-container"]}>
      <h1 data-aos="fade-down" className={classes["challenge-section-header"]}>
        Take Speed Test Now!!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeRemaining={timeRemaining}
        timeStarted={timeStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
      />
      {/* the key of the props need not be the same name as the variables you can also change them to suit you. */}
    </div>
  );
};

export default ChallengeSection;
