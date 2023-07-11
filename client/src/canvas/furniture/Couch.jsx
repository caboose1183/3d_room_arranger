import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Couch(props) {
  const { nodes, materials } = useGLTF("/Couch.glb");
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
        material={materials.mat17}
      />
      <mesh
        name="Node-Mesh_2"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.mat16}
      />
      <mesh
        name="Node-Mesh_3"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.mat20}
      />
    </group>
  );
}

useGLTF.preload("/Couch.glb");
