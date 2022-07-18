import React from "react";
import ChallengeDetailsCard from "./ChallengeDetailsCard";
import TypingChallenge from "./TypingChallenge";
import classes from "./TypingChallengeContainer.module.css";

const TypingChallengeContainer = ({
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
    <div className={classes["typing-challenge-container"]}>
      <div className={classes["details-container"]}>
        {/* words typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* characters typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* Speed */}
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      {/* The Real Challenge */}
      <div className={classes["typewriter-effect"]}>
        <TypingChallenge
          onInputChange={onInputChange}
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
