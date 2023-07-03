import React from "react";

import { useSnapshot } from "valtio";
import state from "../store";

function CustomButton({ type, title, extraStyles, handleClick }) {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`flex-1 px-2 py-1.5 rounded-md ${extraStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
