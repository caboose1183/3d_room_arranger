import React from "react";
import { SketchPicker } from "react-color";

import { useSnapshot } from "valtio";
import state from "../store";

function WallColor() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.wallColor}
        disableAlpha
        onChange={(color) => {
          state.wallColor = color.hex;
        }}
      />
    </div>
  );
}

export default WallColor;
