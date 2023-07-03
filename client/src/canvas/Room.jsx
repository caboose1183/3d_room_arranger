import React from "react";

import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

const Room = () => {
  const snap = useSnapshot(state);

  const { nodes: deskNodes, materials: deskMaterials } = useGLTF("/Desk.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  console.log(deskNodes);

  return (
    <group>
      <mesh
        geometry={deskNodes.Desk.geometry}
        material={deskMaterials.Material}
        dispose={null}
        scale={150}
      />
    </group>
  );
};

export default Room;
