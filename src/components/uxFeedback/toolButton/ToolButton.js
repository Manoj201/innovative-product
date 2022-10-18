import React from "react";
import IconButton from "@mui/material/IconButton";

import "./ToolButton.css";

const ToolButton = ({ onclickTool, icon: Icon, isActive }) => {
  return (
    <div className="canvas-tool-button-wrapper">
      <IconButton onClick={onclickTool}>
        <Icon sx={{ color: isActive ? "white" : "black" }} />
      </IconButton>
    </div>
  );
};

export default ToolButton;
