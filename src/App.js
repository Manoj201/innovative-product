import React, { useState } from "react";
import "./App.css";

import ExampleSelector from "./components/exampleSelector/ExampleSelector.component";
import Workflow from "./components/workflow/Workflow.component";

import example1Data from "./data/example1.json";
import example2Data from "./data/example2.json";
import example3Data from "./data/example3.json";

// import { UXFeedbackFloater } from "ux-feedback-floating-button";

import UXFeeedBackFloater from "./components/uxFeedback/UXFeeedBackFloater.component";

function App() {
  const [data, setData] = useState(example1Data);

  const handleChangeSelection = (value) => {
    switch (value) {
      case "Example 1":
        setData(example1Data);
        break;
      case "Example 2":
        setData(example2Data);
        break;
      case "Example 3":
        setData(example3Data);
        break;
      default:
        setData(example1Data);
    }
  };

  return (
    <div className="rootContainer">
      <ExampleSelector onChange={handleChangeSelection} />
      <Workflow data={data} />
      <UXFeeedBackFloater />
    </div>
  );
}

export default App;
