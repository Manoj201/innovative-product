import React, { useState } from "react";
import * as htmlToImage from "html-to-image";
import classNames from "classnames";

import Canvas from "../drawing/Canvas";

import PenSVG from "../images/pen.svg";
import eraserSVG from "../images/eraser.svg";
import rectangleSVG from "../images/rectangle.svg";
import commentSVG from "../images/comment.svg";

import "./ScreenCaptureLayer.css";

const ScreenCaptureLayer = ({ onClickCancel, onClickSave }) => {
  const [activeTool, setActiveTool] = useState("text");

  const handleClickTool = (tool) => {
    setActiveTool(tool);
  };

  // const handleCaptureScree = () => {
  //   let node = document.getElementById("root");
  //   htmlToImage
  //     .toPng(node)
  //     .then(function (dataUrl) {
  //       onClickSave(dataUrl);
  //     })
  //     .catch(function (error) {
  //       console.error("oops, something went wrong!", error);
  //     });
  // };

  return <Canvas tool={activeTool} />;
};

export default ScreenCaptureLayer;
