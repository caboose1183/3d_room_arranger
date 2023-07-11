import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Trophy(props) {
  const { nodes, materials } = useGLTF("/Trophy.glb");
  return (
    <group {...props} dispose={null} ref={props.innerRef}>
      <mesh
        name="Trophy_Cube024_1"
        castShadow
        receiveShadow
        geometry={nodes.Trophy_Cube024_1.geometry}
        material={materials.FFEB3B}
      />
      <mesh
        name="Trophy_Cube024_1_1"
        castShadow
        receiveShadow
        geometry={nodes.Trophy_Cube024_1_1.geometry}
        material={materials["1A1A1A"]}
      />
      <mesh
        name="Trophy_Cube024_1_2"
        castShadow
        receiveShadow
        geometry={nodes.Trophy_Cube024_1_2.geometry}
        material={materials.F44336}
      />
    </group>
  );
}

useGLTF.preload("/Trophy.glb");
