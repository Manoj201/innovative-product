import React from "react";

import "./ScreenCaptureLayer.css";

const ScreenCaptureLayer = () => {
  return (
    <div className="screen-capture-layer">
      <div className="screen-capture-layer-button-pannel">
        <div
          className="screen-capture-layer-save"
          onClick={() => alert("save")}
        >
          Save
        </div>
        <div
          className="screen-capture-layer-cancel"
          onClick={() => alert("cancel")}
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ScreenCaptureLayer;
