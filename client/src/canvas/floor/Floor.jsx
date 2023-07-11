import React from "react";

import FloorModel from "./FloorModel";

function Floor() {
  return (
    <group>
      {/* top floors */}
      <FloorModel
        scaleModifier={1}
        position={[-3.85, 0, 0]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel scaleModifier={1} position={[0, 0, 0]} rotation-y={Math.PI * 1} />
      <FloorModel
        scaleModifier={1}
        position={[3.9, 0, 0]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[7.8, 0, 0]}
        rotation-y={Math.PI * 1}
      />

      {/* middle floors */}
      <FloorModel
        scaleModifier={1}
        position={[-3.86, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[0, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[3.94, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[7.8, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />

      {/* bottom floors */}

      <FloorModel
        scaleModifier={1}
        position={[-3.86, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[-0.1, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[3.84, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
      <FloorModel
        scaleModifier={1}
        position={[7.78, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
    </group>
  );
}

export default Floor;
