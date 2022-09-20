import React, { useMemo } from "react";

import ItemCardWrapper from "../itemCardWrapper/ItemCardWrapper.component";

import { prepareData } from "../../service/WorkflowDataConverter";
import "./Workflow.css";

const Workflow = ({ data }) => {
  const sanitizedData = useMemo(() => {
    return prepareData(data);
  }, [data]);

  const keysArray = useMemo(() => {
    return Object.keys(sanitizedData);
  }, [sanitizedData]);

  return (
    <div className="workflow-container">
      {keysArray.map((key, index) => (
        <React.Fragment key={`workflow-section-${index}`}>
          <ItemCardWrapper isDone data={sanitizedData[key]} />
          {index !== keysArray.length - 1 && (
            <div className="workflow-stroke" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Workflow;
