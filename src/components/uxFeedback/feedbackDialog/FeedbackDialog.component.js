import React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TextField from "@mui/material/TextField";

import "./FeedbackDialog.css";

const FeedbackDialog = ({ open, onClickDialogClose, emoji }) => {
  const handleClose = () => {
    onClickDialogClose();
  };
  return (
    <Dialog open={open} maxWidth="md">
      <div className="dialog-container">
        <div className="close-wrapper">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="feedback-dialog-header">
          <img src={emoji} alt="emoji" className="dialog-emoji" />
          <div className="feedback-dialog-header-text">
            Would you mind providing us with some feedback so we can improve in
            the future?
          </div>
        </div>
        <div className="feedback-dialog-form-container">
          <div className="feedback-dialog-form-inputwrapper">
            <TextField
              id="feedback-form-name-input"
              label="Name"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
            />
          </div>
          <div className="feedback-dialog-form-inputwrapper">
            <TextField
              id="feedback-form-email-input"
              label="Email"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
            />
          </div>
          <div className="feedback-dialog-form-inputwrapper">
            <div className="feedback-dialog-form-comentwrapper">
              <TextField
                id="feedback-form-comment-input"
                label="Comment"
                multiline
                rows={4}
                style={{ width: "75%" }}
              />
              <div className="add-screenshot-wrapper">
                <IconButton size="medium">
                  <AddAPhotoIcon style={{ width: 35, height: 35 }} />
                </IconButton>
                <div className="add-screenshot-label">Add screenshot</div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-submit-wrapper">
          <div className="feedback-submit-button">Submit</div>
        </div>
      </div>
    </Dialog>
  );
};

export default FeedbackDialog;
