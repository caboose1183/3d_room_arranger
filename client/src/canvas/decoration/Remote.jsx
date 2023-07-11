import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Remote(props) {
  const { nodes, materials } = useGLTF("/Remote.glb");
  return (
    <group {...props} dispose={null} ref={props.innerRef}>
      <mesh
        name="Text001"
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["19___Default"]}
      />
      <mesh
        name="Box001_1"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1.geometry}
        material={materials["07___Default"]}
      />
      <mesh
        name="Box001_1_1"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1_1.geometry}
        material={materials["19___Default"]}
      />
      <mesh
        name="Box001_1_2"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1_2.geometry}
        material={materials["20___Default"]}
      />
      <mesh
        name="Box001_1_3"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1_3.geometry}
        material={materials["13___Default"]}
      />
      <mesh
        name="Box001_1_4"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1_4.geometry}
        material={materials["09___Default"]}
      />
      <mesh
        name="Box001_1_5"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1_5.geometry}
        material={materials["21___Default"]}
      />
      <mesh
        name="Box001_1_6"
        castShadow
        receiveShadow
        geometry={nodes.Box001_1_6.geometry}
        material={materials["08___Default"]}
      />
    </group>
  );
}

useGLTF.preload("/Remote.glb");
