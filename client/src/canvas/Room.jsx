import React, { useRef, useState, useEffect } from "react";

import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import {
  Decal,
  TransformControls,
  useGLTF,
  useTexture,
  Box,
  Sphere,
} from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

const Room = () => {
  const snap = useSnapshot(state);
  const [selectedModel, setSelectedModel] = useState(null);
  const modelRefs = useRef([]);

  const handleModelClick = (modelRef, index) => {
    setSelectedModel(modelRef);
  };

  // nodes and materials for models, done this way as each model has dif number of geometries and materials
  const { nodes: deskNodes, materials: deskMaterials } = useGLTF("/Desk.glb");

  const { nodes: couchNodes, materials: couchMaterials } =
    useGLTF("/Couch_Small.glb");

  // texture application?
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // deskMaterials.Material.emissive.set(0x000000)

  return (
    <group>
      {/* desk */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[0]}
        showX={selectedModel === modelRefs.current[0]}
        showY={selectedModel === modelRefs.current[0]}
        showZ={selectedModel === modelRefs.current[0]}
      >
        <group scale={150} position={[2,0,2]}>
          <mesh
            geometry={deskNodes.Desk.geometry}
            material={deskMaterials.Material}
            onClick={() => handleModelClick(modelRefs.current[0], 0)}
            dispose={null}
            ref={(ref) => (modelRefs.current[0] = ref)}
          />
        </group>
      </TransformControls>

      {/* couch */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[1]}
        showX={selectedModel === modelRefs.current[1]}
        showY={selectedModel === modelRefs.current[1]}
        showZ={selectedModel === modelRefs.current[1]}
      >
        <group
          rotation-x={Math.PI * 1.5}
          scale={150}
          ref={(ref) => {
            modelRefs.current[1] = ref;
          }}
        >
          <mesh
            geometry={couchNodes.Couch_Small2_1.geometry}
            material={couchMaterials.Couch_BeigeDark}
            onClick={() => handleModelClick(modelRefs.current[1], 1)}
            dispose={null}
          />
          <mesh
            geometry={couchNodes.Couch_Small2_2.geometry}
            material={couchMaterials.Couch_BeigeDark}
            onClick={() => handleModelClick(modelRefs.current[1], 1)}
            dispose={null}
          />
        </group>
      </TransformControls>
    </group>
  );
};

export default Room;
