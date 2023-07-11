import React, { useRef, useState } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Decal, TransformControls, useTexture, Box } from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

import Desk from "./furniture/Desk";
import Floor from "./floor/Floor";
import FloorLamp from "./furniture/FloorLamp";
import OfficeChair from "./furniture/OfficeChair";

import WallArt1 from "./decoration/WallArt1";
import WallArt4 from "./decoration/WallArt4";
import WallArt7 from "./decoration/WallArt7";

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
          scale={2}
          position={[-1, 0, -12.5]}
          rotation-y={Math.PI * 1}
        />
      </TransformControls>

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
          scale={2.8}
          onClick={() => handleModelClick(modelRefs.current[1], 1)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[1] = ref)}
        />
      </TransformControls>

      {/* wall art 1 */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[2]}
        showX={selectedModel === modelRefs.current[2]}
        showY={selectedModel === modelRefs.current[2]}
        showZ={selectedModel === modelRefs.current[2]}
        size={0.5}
        position={[-5.8, 2.8, 0.5]}
      >
        <WallArt1
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[2], 2)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[2] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* wall art 4 */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[3]}
        showX={selectedModel === modelRefs.current[3]}
        showY={selectedModel === modelRefs.current[3]}
        showZ={selectedModel === modelRefs.current[3]}
        size={0.5}
        position={[-5.8, 2.8, 3.5]}
      >
        <WallArt4
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[3], 3)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[3] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* wall art 7 */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[4]}
        showX={selectedModel === modelRefs.current[4]}
        showY={selectedModel === modelRefs.current[4]}
        showZ={selectedModel === modelRefs.current[4]}
        size={0.5}
        position={[-5.8, 2.8, 6.5]}
      >
        <WallArt7
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[4], 4)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[4] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* desk chair */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[5]}
        showX={selectedModel === modelRefs.current[5]}
        showY={selectedModel === modelRefs.current[5]}
        showZ={selectedModel === modelRefs.current[5]}
        size={0.5}
        position={[1.7,0,2]}
      >
        <OfficeChair
          scale={2.5}
          onClick={() => handleModelClick(modelRefs.current[5], 5)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[5] = ref)}
          rotation-y={Math.PI}
        />
      </TransformControls>
    </group>
  );
};

export default Room;

/* scale={props.scaleModifier}
      ref={props.innerRef} */
