import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CoffeeTable(props) {
  const { nodes, materials } = useGLTF("/CoffeeTable.glb");
  return (
    <group {...props} dispose={null} ref={props.innerRef}>
      <mesh
        name="Node-Mesh"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh"].geometry}
        material={materials.mat23}
      />
      <mesh
        name="Node-Mesh_1"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.mat24}
      />
    </group>
  );
}

useGLTF.preload("/CoffeeTable.glb");
