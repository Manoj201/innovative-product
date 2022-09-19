import React, { useMemo } from "react";

import ItemCardWrapper from "../itemCardWrapper/ItemCardWrapper.component";

import { prepareData } from "../../service/WorkflowDataConverter";
import example2Data from "../../data/example2.json";
import "./Workflow.css";

const Workflow = () => {
  const data = useMemo(() => {
    return prepareData(example2Data);
  }, []);

  const keysArray = useMemo(() => {
    return Object.keys(data);
  }, [data]);

  return (
    <div className="workflow-container">
      {keysArray.map((key, index) => (
        <React.Fragment key={`workflow-section-${index}`}>
          <ItemCardWrapper isDone data={data[key]} />
          {index !== keysArray.length - 1 && (
            <div className="workflow-stroke" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Workflow;
