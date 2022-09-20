import { orderBy } from "lodash";

const sanatizeDataArray = (data) => {
  return orderBy(data, ["flowSequence", "idFlowItem"], ["asc", "asc"]);
};

// prepare incoming data for component friendly data set
const prepareData = (workflofDara) => {
  try {
    const result = {};
    const data = sanatizeDataArray(workflofDara);
    data.forEach((item) => {
      const { flowSequence } = item;
      if (result[flowSequence]) {
        result[flowSequence] = [...result[flowSequence], item];
      } else {
        result[flowSequence] = [item];
      }
    });

    return result;
  } catch (error) {
    console.error("Workflow Data Manipulation Service Failed.", error);
    return null;
  }
};

// generate sub item text
const generateSubItemText = (subItems) => {
  let text = "";
  for (let i = 0; i < subItems.length; i++) {
    if (i < 2) {
      text = !text
        ? subItems[i].itemTitle
        : `${text}, ${subItems[i].itemTitle}`;
    } else {
      text = `${text}, ...`;
      break;
    }
  }
  return text;
};

export { prepareData, generateSubItemText };
