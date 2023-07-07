// will turn into component later, will need to add geometry and material to mesh to interact with colour changer, also highlight the selected choice
import react, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

const Model = ({ url, onClick, scale }) => {
  const gltf = useGLTF(url);
  const modelRef = useRef();

  const { nodes: modelNodes, materials: modelMaterials } = gltf

  console.log (modelMaterials.Material)

  return (
    <group>
      <mesh ref={modelRef} onClick={onClick}>
        <primitive object={gltf.scene} scale={scale} />
      </mesh>
    </group>
  );
};

export default Model;
