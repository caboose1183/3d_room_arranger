import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Desk(props) {
  const { nodes, materials } = useGLTF("/Desk.glb");
  return (
    <group {...props} dispose={null} scale={props.scaleModifier} ref={props.innerRef}>
      <mesh
        name="Desk"
        castShadow
        receiveShadow
        geometry={nodes.Desk.geometry}
        material={materials.Material}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/Desk.glb");