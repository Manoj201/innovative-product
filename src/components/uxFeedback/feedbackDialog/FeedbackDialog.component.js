import React, { useRef, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";

import FieldIndicator from "../fieldIndicator/FieldIndicator.component";
import FeedbackTextfield from "../feedbackTextfield/FeedbackTextfield.component";
import ScreenCaptureLayer from "../screenCaptureLayer/ScreenCaptureLayer.component";

import cameraSVG from "../images/camera.svg";
import doneSVG from "../images/done.svg";

import "./FeedbackDialog.css";

const indicatorData = [
  { isRequired: false, topLineHeight: 0 },
  { isRequired: false, topLineHeight: 48 },
  { isRequired: true, topLineHeight: 50 },
  { isRequired: false, topLineHeight: 140 },
];

const FeedbackDialog = ({ open, onClickDialogClose, rating }) => {
  const [emailError, setEmailError] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clickedAddImage, setClickedAddImage] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const commentRef = useRef(null);

  useEffect(() => {
    if (open) {
      setFormSubmitted(false);
    }
  }, [open]);

  const handleClose = () => {
    setSubmitClicked(false);
    onClickDialogClose();
  };

  const handleSave = () => {
    setSubmitClicked(true);
    if (!emailError && commentRef.current.value) {
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(commentRef.current.value);
      console.log(rating);
      setFormSubmitted(true);
    }
  };

  const isValidEmail = (email) => {
    return email ? /\S+@\S+\.\S+/.test(email) : true;
  };

  const onChangeEmail = (event) => {
    setEmailError(!isValidEmail(event.target.value));
  };

  const handleClickAddImage = () => {
    setClickedAddImage(true);
  };

  return (
    <>
      <Dialog
        open={open && !clickedAddImage}
        PaperProps={{
          style: { borderRadius: 25 },
        }}
      >
        <div className="feedback-form-dialog-container">
          <div className="feedback-form-header-wrapper">
            {!formSubmitted ? (
              <div>
                <div className="feedback-form-header-text">Feedback form</div>
                <div className="feedback-form-header-sub-text">
                  For future improvements, we would really love to get some
                  feedback from you!
                </div>
                <div className="feedback-form-required-wrapper">
                  <div className="feedback-form-required-circle" />
                  <div className="feedback-form-required-text">= Required</div>
                </div>
              </div>
            ) : (
              <div />
            )}
            <IconButton onClick={handleClose} size="large">
              <CloseIcon className="feedback-form-dialog-close-button" />
            </IconButton>
          </div>
          {!formSubmitted ? (
            <>
              <div className="feedback-form-inputs-container">
                <FieldIndicator data={indicatorData} />
                <div className="feedback-form-inputs-right-container">
                  <FeedbackTextfield inputRef={nameRef} label="Name" />
                  <FeedbackTextfield
                    inputRef={emailRef}
                    label="Email"
                    onChange={onChangeEmail}
                    isError={submitClicked && emailError}
                    errorText={"Enter valid email id"}
                  />
                  <FeedbackTextfield
                    inputRef={commentRef}
                    label="Comments"
                    isComment
                    isError={submitClicked && !commentRef.current.value}
                    errorText="Required"
                  />
                  <div className="feedback-form-inputs-wrapper">
                    <div
                      className="feedback-form-add-photo-wrapper"
                      onClick={handleClickAddImage}
                    >
                      <img
                        src={cameraSVG}
                        alt="cameraSVG"
                        className="feedback-form-camera-iamge"
                      />
                      <div className="feedback-form-add-photo-text">
                        Add a screenshot of your current page and visualize your
                        improvements
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feedback-form-submit-wrapper">
                <div
                  className="feedback-form-submit-button"
                  onClick={handleSave}
                >
                  Submit
                </div>
              </div>
            </>
          ) : (
            <div className="feedback-dialog-thank-wrapper">
              <div>
                <img src={doneSVG} alt="done" className="done-image" />
              </div>
              <div className="feedback-dialog-thank-text">
                Thank you for your feedback! We really appreciate it
              </div>
            </div>
          )}
        </div>
      </Dialog>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={clickedAddImage}
        onClick={handleClose}
      >
        <ScreenCaptureLayer />
      </Backdrop>
    </>
  );
};

export default FeedbackDialog;
