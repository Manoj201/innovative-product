import React, { useMemo } from "react";
import classNames from "classnames";

import ItemCard from "../itemcard/ItemCard.component";

import doneSVG from "../../images/done.svg";
import inprogressSvg from "../../images/inprogress.svg";
import notStartSvg from "../../images/notStart.svg";
import "./ItemCardWrapper.css";

const ItemCardWrapper = ({ data }) => {
  const flowGroupStatus = useMemo(() => data[0]?.flowGroupStatus, [data]);

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
        "item-card-wrapper",
        `item-card-wrapper-border-${flowGroupStatus}`
      )}
    >
      <div className="icon-wrapper">
        <img src={iconMap[flowGroupStatus]} alt="progress" />
      </div>
      {data.map((item, index) => (
        <ItemCard
          key={`item-card-${item.idFlowItem}`}
          status={item.itemStatus}
          title={item.itemTitle}
          subItems={item.subItems}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};

export default ItemCardWrapper;
