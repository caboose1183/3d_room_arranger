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

    console.log(modelRef);
  };

  // nodes and materials for models, done this way as each model has dif number of geometries and materials
  const { nodes: deskNodes, materials: deskMaterials } = useGLTF("/Desk.glb");

  const { nodes: couchNodes, materials: couchMaterials } =
    useGLTF("/Couch_Small.glb");

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
        <group scale={150} castShadow>
          <mesh
            geometry={deskNodes.Desk.geometry}
            material={deskMaterials.Material}
            onClick={() => handleModelClick(modelRefs.current[0], 0)}
            dispose={null}
            ref={(ref) => (modelRefs.current[0] = ref)}
          >
            {snap.isFullTexture && (
              // <Decal mesh={modelRefs.current[0]}>
              //   <meshBasicMaterial
              //     map={fullTexture}
              //     polygonOffset
              //     polygonOffsetFactor={-1}
              //   />
              // </Decal>
              <meshBasicMaterial attach="material" map={fullTexture} />
            )}
          </mesh>
        </group>
      </TransformControls>

      {/* couch */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[1]}
        showX={selectedModel === modelRefs.current[1]}
        showY={selectedModel === modelRefs.current[1]}
        showZ={selectedModel === modelRefs.current[1]}
        size={0.5}
      >
        <group
          rotation-x={Math.PI * 1.5}
          scale={150}
          ref={(ref) => (modelRefs.current[1] = ref)}
          castShadow
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
