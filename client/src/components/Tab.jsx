import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isTransformTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isTransformTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : {
          backgroundColor: "transparent",
          opacity: 1,
        };

  return (
    <div
      key={tab.name}
      className={`flex justify-center items-center w-14 h-14 cursor-pointer select-none 
      ${isTransformTab ? `glass rounded-full` : `rounded-4`}`}
      onClick={handleClick}
    >
      {tab.icon}
    </div>
  );
};

export default Tab;
