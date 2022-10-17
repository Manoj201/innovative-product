import React, { useState, useMemo } from "react";
import classNames from "classnames";
import Backdrop from "@mui/material/Backdrop";

import Delayed from "./delayed/Delayed.component";
import FeedbackDialog from "./feedbackDialog/FeedbackDialog.component";
import ScreenCaptureLayer from "./screenCaptureLayer/ScreenCaptureLayer.component";

import cryingSVG from "./images/crying.svg";
import disapointedSVG from "./images/disapointed.svg";
import smilingSVG from "./images/smiling.svg";
import whiteSmilingSVG from "./images/whiteSmiling.svg";
import worriedSVG from "./images/worried.svg";
import arrowSVG from "./images/arrow.svg";

import "./UXFeeedBackFloater.css";

const initialFormData = {
  name: "",
  email: "",
  comments: "",
};

const UXFeeedBackFloater = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [rating, setRating] = useState(0);
  const [clickedAddImage, setClickedAddImage] = useState(false);
  const [imageData, setImageData] = useState(null);

  const [formData, setFormData] = useState(initialFormData);

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

  const handleClickAddImage = (value, formData) => {
    setClickedAddImage(value);
    setFormData(formData);
  };

  const handleClickScreenCapture = (imageData) => {
    setImageData(imageData);
    setClickedAddImage(false);
  };

  const handleSubmit = (formData) => {
    console.log(formData, rating, imageData);
    setFormData(initialFormData);
  };

  const handleDialogClose = () => {
    setRating(0);
    setImageData(null);
    setFormData(initialFormData);
  };

  return (
    <>
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
      </div>
      <FeedbackDialog
        open={rating > 0 && !clickedAddImage}
        onClickDialogClose={handleDialogClose}
        rating={rating}
        onClickAddImage={handleClickAddImage}
        isScreenCaptured={imageData ? true : false}
        onClickRemoveImage={() => setImageData(null)}
        onClickRetakeScreenshot={() => setClickedAddImage(true)}
        initialFormData={formData}
        onClickSubmit={handleSubmit}
      />
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
        open={clickedAddImage}
      >
        <ScreenCaptureLayer
          onClickCancel={() => setClickedAddImage(false)}
          onClickSave={handleClickScreenCapture}
        />
      </Backdrop>
    </>
  );
};

export default UXFeeedBackFloater;
