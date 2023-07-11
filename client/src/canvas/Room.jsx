import React, { useRef, useState } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Decal, TransformControls, useTexture, Box } from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

import Desk from "./furniture/Desk";
import Couch from "./furniture/Couch";
import Floor from "./floor/Floor";

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
      {/* top floors */}
      <Floor
        scaleModifier={1}
        position={[-3.85, 0, 0]}
        rotation-y={Math.PI * 1}
      />
      <Floor scaleModifier={1} position={[0, 0, 0]} rotation-y={Math.PI * 1} />
      <Floor
        scaleModifier={1}
        position={[3.9, 0, 0]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[7.8, 0, 0]}
        rotation-y={Math.PI * 1}
      />

      {/* middle floors */}
      <Floor
        scaleModifier={1}
        position={[-3.86, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[0, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[3.94, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[7.88, 0, 3.63]}
        rotation-y={Math.PI * 1}
      />

      {/* bottom floors */}

      <Floor
        scaleModifier={1}
        position={[-3.86, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[-0.1, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[3.84, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />
      <Floor
        scaleModifier={1}
        position={[7.78, 0, 7.25]}
        rotation-y={Math.PI * 1}
      />

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
