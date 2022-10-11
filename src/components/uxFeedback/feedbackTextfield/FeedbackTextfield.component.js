import React from "react";
import TextField from "@mui/material/TextField";

import "./FeedbackTextfield.css";

const FeedbackTextfield = ({
  inputRef,
  label,
  isComment,
  onChange,
  isError,
  errorText,
}) => {
  return (
    <div className="feedback-form-inputs-wrapper">
      <div
        className={
          isComment
            ? "feedback-form-inputs-label-comments"
            : "feedback-form-inputs-label"
        }
      >
        {label}
        {isError && <div className="error-text">( {errorText} )</div>}
      </div>
      <TextField
        id={`feedback-form-name-input-${label}`}
        variant={isComment ? "outlined" : "standard"}
        size="small"
        style={{ width: "410px" }}
        inputRef={inputRef}
        inputProps={{
          style: { color: "white" },
        }}
        sx={{
          "& .MuiInput-underline:before": {
            borderBottomColor: "#fff",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        multiline={isComment}
        {...(isComment && { rows: 4 })}
        {...(onChange && { onChange: onChange })}
      />
    </div>
  );
};

export default FeedbackTextfield;
