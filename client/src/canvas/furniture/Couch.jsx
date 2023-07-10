import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Couch(props) {
  const { nodes, materials } = useGLTF("/Couch_Small.glb");
  return (
    <group {...props} dispose={null} scale={props.scaleModifier} ref={props.innerRef}>
      <group name="Couch_Small2" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          name="Couch_Small2_1"
          castShadow
          receiveShadow
          geometry={nodes.Couch_Small2_1.geometry}
          material={materials.Couch_BeigeDark}
        />
        <mesh
          name="Couch_Small2_2"
          castShadow
          receiveShadow
          geometry={nodes.Couch_Small2_2.geometry}
          material={materials.Couch_Beige}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Couch_Small.glb");