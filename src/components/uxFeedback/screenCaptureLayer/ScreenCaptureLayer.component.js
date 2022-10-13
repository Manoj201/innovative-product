import React, { useState } from "react";
import * as htmlToImage from "html-to-image";

import Canvas from "../drawing/Canvas";

import PenSVG from "../images/pen.svg";
import eraserSVG from "../images/eraser.svg";
import rectangleSVG from "../images/rectangle.svg";
import commentSVG from "../images/comment.svg";

import "./ScreenCaptureLayer.css";

const ScreenCaptureLayer = ({ onClickCancel, onClickSave }) => {
  const [activeTool, setActiveTool] = useState(null);

  const handleClickTool = (tool) => {
    setActiveTool(tool);
  };

  const handleCaptureScree = () => {
    let node = document.getElementById("root");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        onClickSave(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <>
      <Canvas activeTool={activeTool} />
      <div className="screen-capture-layer">
        <div className="screen-capture-layer-tool-pannel">
          <img
            src={PenSVG}
            alt="pen"
            className="tool-svg"
            onClick={() => handleClickTool("pen")}
          />
          <img
            src={eraserSVG}
            alt="pen"
            className="tool-svg"
            onClick={() => handleClickTool("eraser")}
          />
          <img
            src={rectangleSVG}
            alt="pen"
            className="tool-svg"
            onClick={() => handleClickTool("rect")}
          />
          <img src={commentSVG} alt="pen" className="tool-svg" />
        </div>
        <div className="screen-capture-layer-button-pannel">
          <div className="screen-capture-layer-cancel" onClick={onClickCancel}>
            Cancel
          </div>
          <div
            className="screen-capture-layer-save"
            onClick={handleCaptureScree}
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenCaptureLayer;
