import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function OfficeChair(props) {
  const { nodes, materials } = useGLTF("/Office_Chair.glb");
  return (
    <group {...props} dispose={null}>
      <group name="OfficeChair" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          name="OfficeChair_1"
          castShadow
          receiveShadow
          geometry={nodes.OfficeChair_1.geometry}
          material={materials.Grey}
        />
        <mesh
          name="OfficeChair_2"
          castShadow
          receiveShadow
          geometry={nodes.OfficeChair_2.geometry}
          material={materials.Black}
        />
        <mesh
          name="OfficeChair_3"
          castShadow
          receiveShadow
          geometry={nodes.OfficeChair_3.geometry}
          material={materials.Chair}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Office_Chair.glb");
