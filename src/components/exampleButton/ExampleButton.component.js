import React from "react";
import classNames from "classnames";

import "./ExampleButton.css";

const ExampleButton = ({ label, selected, onClick }) => {
  return (
    <div
      className={classNames("button-root", selected && "button-root-selected")}
      onClick={() => onClick()}
    >
      {label}
    </div>
  );
};

export default ExampleButton;
