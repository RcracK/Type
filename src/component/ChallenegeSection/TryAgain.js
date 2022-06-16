import React from "react";
import classes from "./TryAgain.module.css";

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <div className={classes["try-again-container"]}>
      <h1>Test Results</h1>

      <div className={classes["results-container"]}>
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Words:</b> {words}
        </p>
        <p>
          <b>Speed:</b> {wpm}wpm
        </p>
      </div>

      <div>
        <button className={classes["end-buttons, try-btn"]}>Re-try</button>
        <button
          onClick={() => {
            window.open(
              "https://www.facbook.com/sharer/sharer.php?u=rupertcrack",
              "facebook-share-dialog",
              "width=800",
              "height=600"
            );
          }}
          className={classes["end-buttons, share-btn"]}
        >
          Share
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.twitter.com/intent/tweet?text=@RupertCrack",
              "twitter-share-dialog",
              "width=800",
              "height=600"
            );
          }}
          className={classes["end-buttons, tweet-btn"]}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
