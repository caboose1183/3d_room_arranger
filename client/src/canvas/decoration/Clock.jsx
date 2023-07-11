import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Clock(props) {
  const { nodes, materials } = useGLTF("/Clock.glb");
  return (
    <group {...props} dispose={null} ref={props.innerRef}>
      <mesh
        name="Analog_Cock"
        castShadow
        receiveShadow
        geometry={nodes.Analog_Cock.geometry}
        material={materials.Mat}
      />
    </group>
  );
}

useGLTF.preload("/Clock.glb");
