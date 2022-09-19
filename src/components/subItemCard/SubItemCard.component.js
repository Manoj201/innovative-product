import React, { useMemo } from "react";
import classNames from "classnames";

import doneSVG from "../../images/done.svg";
import inprogressSvg from "../../images/inprogress.svg";
import notStartSvg from "../../images/notStart.svg";
import "./SubItemCard.css";

const SubItemCard = ({ isLast, subItems, show }) => {
  const iconMap = useMemo(() => {
    return {
      1: notStartSvg,
      2: inprogressSvg,
      3: doneSVG,
    };
  }, []);

  return (
    <div
      className={classNames(
        "sub-item-container",
        isLast && "sub-item-container-last"
      )}
    >
      {subItems.map((item, index) => (
        <div key={`sub-item-row-${index}`} className="sub-item-row">
          <div className="sub-item-row-left-wrapper">
            <img
              src={iconMap[item.itemStatus]}
              alt="status-icon"
              className="sub-item-icon"
            />
            <div className="sub-item-title">{item.itemTitle}</div>
          </div>
          <div className="sub-item-sequence-text">{item.itemSequence}</div>
        </div>
      ))}
    </div>
  );
};

export default SubItemCard;
