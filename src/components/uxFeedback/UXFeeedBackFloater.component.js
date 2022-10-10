import React, { useState, useMemo } from "react";
import classNames from "classnames";

import Delayed from "./delayed/Delayed.component";
import FeedbackDialog from "./feedbackDialog/FeedbackDialog.component";

import cryingSVG from "./images/crying.svg";
import disapointedSVG from "./images/disapointed.svg";
import smilingSVG from "./images/smiling.svg";
import whiteSmilingSVG from "./images/whiteSmiling.svg";
import worriedSVG from "./images/worried.svg";
import arrowSVG from "./images/arrow.svg";

import "./UXFeeedBackFloater.css";

const UXFeeedBackFloater = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [rating, setRating] = useState(0);

  const iconMap = useMemo(() => {
    return {
      1: cryingSVG,
      2: disapointedSVG,
      3: worriedSVG,
      4: whiteSmilingSVG,
      5: smilingSVG,
    };
  }, []);

  const handleClickFloatingButton = () => {
    if (isCollapse) {
      setIsCollapse(false);
    }
  };

  const handleClickEmoji = (rating) => {
    setRating(rating);
    setIsCollapse(true);
  };

  return (
    <div
      className={classNames(
        "floating-button",
        isCollapse === false && "floating-button-clicked"
      )}
      onClick={rating === 0 ? handleClickFloatingButton : null}
    >
      {isCollapse ? (
        <>
          <div>Feed&#10;back</div>
        </>
      ) : (
        <Delayed>
          <div className="detailed-container">
            <div>
              <div className="experience-text">
                ? How is your experience so far
              </div>
              <div className="emojiWrapper">
                {Object.entries(iconMap).map((key, index) => (
                  <img
                    key={index}
                    src={iconMap[index + 1]}
                    alt="cryingSVG"
                    className="emoji"
                    onClick={() => handleClickEmoji(index + 1)}
                  />
                ))}
              </div>
            </div>
            <img
              src={arrowSVG}
              alt="arrow"
              className="arrow"
              onClick={() => setIsCollapse(true)}
            />
          </div>
        </Delayed>
      )}
      <FeedbackDialog
        open={rating > 0}
        onClickDialogClose={() => setRating(0)}
        rating={rating}
      />
    </div>
  );
};

export default UXFeeedBackFloater;
