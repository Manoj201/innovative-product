import React from "react";

import "./FieldIndicator.css";

const FieldIndicator = ({ data }) => {
  return (
    <div className="feedback-form-inputs-left-container">
      {data.map((item, index) => (
        <React.Fragment key={`indicator-${index}`}>
          <div
            style={{
              width: 2,
              backgroundColor: "#E0E3EB",
              height: item.topLineHeight,
            }}
          />
          <div
            className={
              item.isRequired
                ? "feedback-form-inputs-required-indicator"
                : "feedback-form-inputs-indicator"
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FieldIndicator;
