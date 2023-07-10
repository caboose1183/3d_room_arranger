import React, { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";
import {
  Decal,
  TransformControls,
  useTexture,
  Box,
} from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

import Desk from "./furniture/Desk";
import Couch from "./furniture/Couch";

const Room = () => {
  const snap = useSnapshot(state);
  const [selectedModel, setSelectedModel] = useState(null);
  const modelRefs = useRef([]);

  const handleModelClick = (modelRef, index) => {
    setSelectedModel(modelRef);
  };
  // colour easing

  // useFrame((state, delta) => {
  //   easing.dampC(deskMaterials.Material.color, snap.color, 0.25, delta);
  //   easing.dampC(couchMaterials.Couch_BeigeDark.color, snap.color, 0.25, delta);
  // });

  // texture application?
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // const wheel = useTexture("./colour_wheel.jpg");

  // deskMaterials.Material.emissive.set(0x000000)

  // to change model position, apply position to the transform controls

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      {/* desk */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[0]}
        showX={selectedModel === modelRefs.current[0]}
        showY={selectedModel === modelRefs.current[0]}
        showZ={selectedModel === modelRefs.current[0]}
        size={0.5}
        position={[2, 0, 2]}
      >
        <Desk
          onClick={() => handleModelClick(modelRefs.current[0], 0)}
          innerRef={(ref) => (modelRefs.current[0] = ref)}
          scaleModifier={1}
        />
      </TransformControls>

      {/* couch */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[1]}
        showX={selectedModel === modelRefs.current[1]}
        showY={selectedModel === modelRefs.current[1]}
        showZ={selectedModel === modelRefs.current[1]}
        size={0.5}
      >
        <Couch
          scaleModifier={1}
          onClick={() => handleModelClick(modelRefs.current[1], 1)}
          innerRef={(ref) => (modelRefs.current[1] = ref)}
        />
      </TransformControls>
    </group>
  );
};

export default Room;
