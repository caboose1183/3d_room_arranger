import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Houseplant(props) {
  const { nodes, materials } = useGLTF("/Houseplant.glb");
  return (
    <group {...props} dispose={null} ref={props.innerRef}>
      <group name="Houseplant_7" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          name="Houseplant_7_1"
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_1.geometry}
          material={materials.Black}
        />
        <mesh
          name="Houseplant_7_2"
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_2.geometry}
          material={materials.Brown}
        />
        <mesh
          name="Houseplant_7_3"
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_3.geometry}
          material={materials.Plant_Green}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Houseplant.glb");
