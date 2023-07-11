import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WallArt4(props) {
  const { nodes, materials } = useGLTF("/WallArt4.glb");
  return (
    <group
      {...props}
      dispose={null}
      ref={props.innerRef}
    >
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
        material={materials.mat21}
      />
      <mesh
        name="Node-Mesh_2"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.mat15}
      />
      <mesh
        name="Node-Mesh_3"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.mat24}
      />
      <mesh
        name="Node-Mesh_4"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_4"].geometry}
        material={materials.mat25}
      />
    </group>
  );
}

useGLTF.preload("/WallArt4.glb");
