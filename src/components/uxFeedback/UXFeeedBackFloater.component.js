import React, { useState } from "react";
import classNames from "classnames";

import Delayed from "./delayed/Delayed.component";

import cryingSVG from "./images/crying.svg";
import disapointedSVG from "./images/disapointed.svg";
import smilingSVG from "./images/smiling.svg";
import whiteSmilingSVG from "./images/whiteSmiling.svg";
import worriedSVG from "./images/worried.svg";
import arrowSVG from "./images/arrow.svg";

import "./UXFeeedBackFloater.css";

const UXFeeedBackFloater = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleClickFloatingButton = () => {
    if (isCollapse) {
      setIsCollapse(false);
    }
  };

  return (
    <div className="grow-left">
      <div
        className={classNames(
          "floating-button",
          isCollapse === false && "floating-button-clicked"
        )}
        onClick={handleClickFloatingButton}
      >
        {isCollapse ? (
          <>
            <div>Feed</div>
            <div>back</div>
          </>
        ) : (
          <Delayed>
            <div className="detailed-container">
              <div>
                <div className="experience-text">
                  How is your experience so far
                </div>
                <div className="emojiWrapper">
                  <img
                    src={cryingSVG}
                    alt="cryingSVG"
                    className="emoji"
                    onClick={() => alert("1")}
                  />

                  <img
                    src={disapointedSVG}
                    alt="disapointedSVG"
                    className="emoji"
                    onClick={() => alert("2")}
                  />
                  <img src={worriedSVG} alt="worriedSVG" className="emoji" />
                  <img
                    src={whiteSmilingSVG}
                    alt="whiteSmilingSVG"
                    className="emoji"
                  />
                  <img src={smilingSVG} alt="smilingSVG" className="emoji" />
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
      </div>
    </div>
  );
};

export default UXFeeedBackFloater;
