import React, { useRef, useState } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Decal, TransformControls, useTexture, Box } from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

import Desk from "./furniture/Desk";
import Floor from "./floor/Floor";
import FloorLamp from "./furniture/FloorLamp";

const Room = () => {
  const snap = useSnapshot(state);
  const [selectedModel, setSelectedModel] = useState(null);
  const modelRefs = useRef([]);


  // handles left click select and right click deselect
  const handleModelClick = (modelRef, index) => {
    setSelectedModel(modelRef);
  };

  const handleModelRightClick = () => {
    setSelectedModel(null);
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

  // geometry and material for walls
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

  const floor1Material = new THREE.MeshStandardMaterial({
    color: "#2e302f",
    metalness: 0,
    roughness: 1,
  });

  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <Floor />

      {/* left wall */}
      <mesh
        position={[-5.85, 2.5, 3.62]}
        geometry={boxGeometry}
        material={floor1Material}
        scale={[0.05, 5, 10.9]}
        receiveShadow
      />

      {/* back wall */}
      <mesh
        position={[2, 2.5, -1.8]}
        geometry={boxGeometry}
        material={floor1Material}
        scale={[15.8, 5, 0.05]}
        receiveShadow
      />

      {/* desk */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[0]}
        showX={selectedModel === modelRefs.current[0]}
        showY={selectedModel === modelRefs.current[0]}
        showZ={selectedModel === modelRefs.current[0]}
        size={0.5}
        position-x={2}
        position-z={-0.5}
      >
        <Desk
          onClick={() => handleModelClick(modelRefs.current[0], 0)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[0] = ref)}
          scaleModifier={2}
          position={[-1, 0, -12.5]}
          rotation-y={Math.PI * 1}
        />
      </TransformControls>

      {/* couch */}
      {/* <TransformControls
        enabled={selectedModel === modelRefs.current[1]}
        showX={selectedModel === modelRefs.current[1]}
        showY={selectedModel === modelRefs.current[1]}
        showZ={selectedModel === modelRefs.current[1]}
        size={0.5}
        position={[3, 0, 0]}
      >
        <Couch
          scaleModifier={1}
          onClick={() => handleModelClick(modelRefs.current[1], 1)}
          innerRef={(ref) => (modelRefs.current[1] = ref)}
        />
      </TransformControls> */}

      {/* scale={props.scaleModifier}
      ref={props.innerRef} */}

      {/* floor lamp */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[1]}
        showX={selectedModel === modelRefs.current[1]}
        showY={selectedModel === modelRefs.current[1]}
        showZ={selectedModel === modelRefs.current[1]}
        size={0.5}
        position={[-5, 0, -1]}
      >
        <FloorLamp
          scaleModifier={2.8}
          onClick={() => handleModelClick(modelRefs.current[1], 1)}
          innerRef={(ref) => (modelRefs.current[1] = ref)}
        />
      </TransformControls>
    </group>
  );
};

export default Room;
