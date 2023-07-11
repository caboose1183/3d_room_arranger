import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FloorLamp(props) {
  const { nodes, materials } = useGLTF("/FloorLamp.glb");
  return (
    <group
      {...props}
      dispose={null}
      ref={props.innerRef}
    >
      <group name="Light_Floor1" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          name="Light_Floor1_1"
          castShadow
          receiveShadow
          geometry={nodes.Light_Floor1_1.geometry}
          material={materials.Grey}
        />
        <mesh
          name="Light_Floor1_2"
          castShadow
          receiveShadow
          geometry={nodes.Light_Floor1_2.geometry}
          material={materials.LightMetal}
        />
        <mesh
          name="Light_Floor1_3"
          castShadow
          receiveShadow
          geometry={nodes.Light_Floor1_3.geometry}
          material={materials.Light}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/FloorLamp.glb");
