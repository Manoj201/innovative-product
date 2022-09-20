import React, { useState } from "react";

import ExampleButton from "../exampleButton/ExampleButton.component";

import "./ExampleSelector.css";

const buttonArray = ["Example 1", "Example 2", "Example 3"];

const ExampleSelector = ({ onChange }) => {
  const [selected, setSelected] = useState("Example 1");

  const handelClick = (item) => {
    setSelected(item);
    onChange(item);
  };

  return (
    <div className="selector-container">
      {buttonArray.map((item) => (
        <ExampleButton
          key={item}
          label={item}
          selected={item === selected}
          onClick={() => handelClick(item)}
        />
      ))}
    </div>
  );
};

export default ExampleSelector;
