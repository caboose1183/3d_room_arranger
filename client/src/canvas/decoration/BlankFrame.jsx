import React, { useRef } from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../../store";

export default function BlankFrame(props) {
  const snap = useSnapshot(state);

  const texture = useTexture(snap.artTextureBlank);
  const { nodes, materials } = useGLTF("/BlankFrame.glb");
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
        material={materials.mat21}
      />
      <mesh
        name="Node-Mesh_2"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.mat15}
      />

      {/* Decal puts custom material in front of this mesh */}
      <mesh
        name="Node-Mesh_3"
        castShadow
        receiveShadow
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.mat24}
        rotation-y={snap.isFullTexture ? Math.PI : 0}
      >
        {snap.isFullTexture && (
          <>
            <planeGeometry args={[0.5, 0.85]} />
            <Decal position-z={0.01}>
              <meshBasicMaterial map={texture} />
            </Decal>
          </>
        )}
      </mesh>
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

useGLTF.preload("/BlankFrame.glb");
