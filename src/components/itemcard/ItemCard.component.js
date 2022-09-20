import React, { useMemo, useState } from "react";
import classNames from "classnames";
import Collapse from "@mui/material/Collapse";

import SubItemCard from "../subItemCard/SubItemCard.component";
import { generateSubItemText } from "../../service/WorkflowDataConverter";

import doneSVG from "../../images/done.svg";
import inprogressSvg from "../../images/inprogress.svg";
import notStartSvg from "../../images/notStart.svg";

import "./ItemCard.css";

const ItemCard = ({ status, title, isLast, subItems }) => {
  const [showSubItemCard, setShowSubItemCard] = useState(false);
  const iconMap = useMemo(() => {
    return {
      1: notStartSvg,
      2: inprogressSvg,
      3: doneSVG,
    };
  }, []);

  const subTitle = useMemo(() => generateSubItemText(subItems), [subItems]);

  const handleClickCard = () => {
    setShowSubItemCard(!showSubItemCard);
  };

  return (
    <div
      className={classNames(
        "item-card-container",
        isLast && "item-card-container-last"
      )}
    >
      <div
        className={classNames("item-card", isLast && "item-card-last")}
        onClick={handleClickCard}
      >
        <div className="item-card-icon-wrpper">
          <img src={iconMap[status]} alt="status-icon" />
        </div>
        <div className="item-card-text-wrpper">
          <div className="item-card-title">{title}</div>
          <div className="item-card-subtitle">{subTitle}</div>
        </div>
      </div>
      <Collapse in={showSubItemCard}>
        <SubItemCard isLast={isLast} subItems={subItems} />
      </Collapse>
    </div>
  );
};

export default ItemCard;
