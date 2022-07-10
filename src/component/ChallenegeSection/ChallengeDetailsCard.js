import React from "react";
import classes from "./ChallengeDetailsCard.module.css";

const ChallengeDetailsCard = ({ cardName, cardValue }) => {
  return (
    <div className={classes["details-card-container"]}>
      <div className={classes["card-name"]}>{cardName}</div>
      <div className={classes["card-value"]}>{cardValue}</div>
    </div>
  );
};

export default ChallengeDetailsCard;
