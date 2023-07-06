import React, { useRef, useState } from "react";

import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import {
  Decal,
  TransformControls,
  useGLTF,
  useTexture,
  Box,
  Sphere,
} from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

// will turn into component later, will need to add geometry and material to mesh to interact with colour changer, also highlight the selected choice
const Model = ({ url, onClick, scale }) => {
  const gltf = useGLTF(url);
  const modelRef = useRef();

  return (
    <group>
      <mesh ref={modelRef} onClick={onClick} >
        <primitive object={gltf.scene} scale={scale}  />
      </mesh>
    </group>
  );
};

const Room = () => {
  // old code for individual loading of models
  // 
  // 
  // 
  // const snap = useSnapshot(state);
  // const reffed = useRef();

  // const { nodes: deskNodes, materials: deskMaterials } = useGLTF("/Desk.glb");

  // const { nodes: couchNodes, materials: couchMaterials } =
  //   useGLTF("/Couch_Small.glb");

  // const logoTexture = useTexture(snap.logoDecal);
  // const fullTexture = useTexture(snap.fullDecal);

  // console.log (deskMaterials)

  // deskMaterials.Material.color.b=15
  // deskMaterials.Material.color.g=15
  // deskMaterials.Material.color.r=15

  // const [selectedMesh, setSelectedMesh] = useState(null);
  // const boxRef = useRef();
  // const sphereRef = useRef();

  // const meshRefs = useRef([]);

  // const addMeshRef = (meshRef) => {
  //   if (meshRef && !meshRefs.current.includes(meshRef)) {
  //     meshRefs.current.push(meshRef);
  //   }
  // };

  // const handleMeshClick = (meshRef) => {
  //   setSelectedMesh(selectedMesh === meshRef ? null : meshRef);
  // };
  //
  //
  //
  // current code for mapping over multiple models
  const models = [
    { url: "/Desk.glb", scale: 5 },
    { url: "/Couch_Small.glb", scale: 1  },
    // Add more models as needed
  ];

  const [selectedModel, setSelectedModel] = useState(null);
  const modelRefs = useRef([]);


  const handleModelClick = (modelRef) => {
    setSelectedModel(selectedModel === modelRef ? null : modelRef);
  };

  const addModelRef = (modelRef) => {
    if (modelRef && !modelRefs.current.includes(modelRef)) {
      modelRefs.current.push(modelRef);
    }
  };

  return (
    <group>
      {/* testing code of applying geometry and material */}
      {/* <TransformControls>
        <mesh
          geometry={deskNodes.Desk.geometry}
          material={deskMaterials.Material}
          scale={150}
        />
      </TransformControls> */}

      {/* simple individual moving of models with seperate userefs */}

      {/* <TransformControls
        ref={boxRef}
        enabled={selectedMesh === boxRef.current}
        showX={selectedMesh === boxRef.current}
        showY={selectedMesh === boxRef.current}
        showZ={selectedMesh === boxRef.current}
      >

      </TransformControls>

      <TransformControls
        ref={sphereRef}
        enabled={selectedMesh === sphereRef.current}
        showX={selectedMesh === sphereRef.current}
        showY={selectedMesh === sphereRef.current}
        showZ={selectedMesh === sphereRef.current}
      >
        <Sphere onClick={() => handleMeshClick(sphereRef.current)}>
          <meshStandardMaterial attach="material" color="blue" />
        </Sphere>
      </TransformControls> */}

      {/* old code for individual moving of models */}

      {/* {models.map((model, index) => (
        <TransformControls
          key={index}
          ref={(ref) => addModelRef(ref)}
          enabled={selectedModel === modelRefs.current[index]?.current}
          showX={selectedModel === modelRefs.current[index]?.current}
          showY={selectedModel === modelRefs.current[index]?.current}
          showZ={selectedModel === modelRefs.current[index]?.current}
        >
          <Model
            url={model.url}
            onClick={() => handleModelClick(modelRefs.current[index]?.current)}
            scale={model.scale}
          />
        </TransformControls>
      ))} */}

      {models.map((model, index) => (
        <TransformControls
          key={index}
          ref={(ref) => (modelRefs.current[index] = ref)}
          enabled={selectedModel === index}
          showX={selectedModel === index}
          showY={selectedModel === index}
          showZ={selectedModel === index}
        >
          <Model url={model.url} onClick={() => handleModelClick(index)} scale={model.scale} />
        </TransformControls>
      ))}
    </group>
  );
};

export default Room;
