import React, { useMemo } from "react";
import classNames from "classnames";

import { generateSubItemText } from "../../service/WorkflowDataConverter";

import doneSVG from "../../images/done.svg";
import inprogressSvg from "../../images/inprogress.svg";
import notStartSvg from "../../images/notStart.svg";

import "./ItemCard.css";

const ItemCard = ({ status, title, isLast, subItems }) => {
  const iconMap = useMemo(() => {
    return {
      1: notStartSvg,
      2: inprogressSvg,
      3: doneSVG,
    };
  }, []);

  const subTitle = useMemo(() => generateSubItemText(subItems), [subItems]);

  const handleClickCard = () => {
    console.log("Handle Click Card");
  };

  return (
    <div
      className={classNames("item-card", isLast && "item-card-last")}
      onClick={handleClickCard}
    >
      <div className="item-card-icon-wrpper">
        <img src={iconMap[status]} alt="status-icon" />
      </div>
      <div>
        <div className="item-card-title">{title}</div>
        <div className="item-card-subtitle">{subTitle}</div>
      </div>
    </div>
  );
};

export default ItemCard;
