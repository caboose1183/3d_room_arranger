import React, { useRef, useState } from "react";

import * as THREE from "three";
import {
  Decal,
  TransformControls,
  useTexture,
  Html,
  PivotControls,
} from "@react-three/drei";

import { useSnapshot } from "valtio";
import state from "../store";

import Desk from "./furniture/Desk";
import Floor from "./floor/Floor";
import FloorLamp from "./furniture/FloorLamp";
import OfficeChair from "./furniture/OfficeChair";
import Shelf from "./furniture/Shelf";
import Couch from "./furniture/Couch";
import CoffeeTable from "./furniture/CoffeeTable";

import WallArt1 from "./decoration/WallArt1";
import WallArt4 from "./decoration/WallArt4";
import WallArt7 from "./decoration/WallArt7";
import BlankFrame from "./decoration/BlankFrame";
import Gundam from "./decoration/Gundam";
import Trophy from "./decoration/Trophy";
import Clock from "./decoration/Clock";
import TV from "./decoration/TV";
import Remote from "./decoration/Remote";
import Houseplant from "./decoration/Houseplant";
import Shiba from "./decoration/Shiba";

const Room = () => {
  const snap = useSnapshot(state);
  const [selectedModel, setSelectedModel] = useState(null);
  const modelRefs = useRef([]);

  // handles left click select and right click deselect
  const handleModelClick = (modelRef, index) => {
    setSelectedModel(modelRef);
  };

  const handleModelRightClick = () => {
    setSelectedModel(null);
  };
  // colour easing

  // useFrame((state, delta) => {
  //   easing.dampC(deskMaterials.Material.color, snap.color, 0.25, delta);
  //   easing.dampC(couchMaterials.Couch_BeigeDark.color, snap.color, 0.25, delta);
  // });

  // const wheel = useTexture("./colour_wheel.jpg");

  // deskMaterials.Material.emissive.set(0x000000)

  // to change model position, apply position to the transform controls

  // geometry and material for walls
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

  const floor1Material = new THREE.MeshStandardMaterial({
    color: "#2e302f",
    metalness: 0,
    roughness: 1,
  });

  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <Floor />

      {/* left wall */}
      <mesh
        position={[-5.85, 2.5, 3.62]}
        geometry={boxGeometry}
        material={floor1Material}
        scale={[0.05, 5, 10.9]}
        receiveShadow
      />

      {/* back wall */}
      <mesh
        position={[2, 2.5, -1.8]}
        geometry={boxGeometry}
        material={floor1Material}
        scale={[15.8, 5, 0.05]}
        receiveShadow
      />

      {/* desk */}
      <PivotControls
        offset={[2, 0, -0.5]}
        disableAxes={selectedModel != modelRefs.current[0]}
        disableRotations={selectedModel != modelRefs.current[0]}
        disableSliders={selectedModel != modelRefs.current[0]}
      >
        <Desk
          onClick={() => handleModelClick(modelRefs.current[0], 0)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[0] = ref)}
          scale={2}
          position={[1, 0, -13]}
          rotation-y={Math.PI * 1}
        />
      </PivotControls>

      {/* floor lamp */}
      <PivotControls
        scale={1}
        offset={[-5, 0, -1]}
        disableAxes={selectedModel != modelRefs.current[1]}
        disableRotations={selectedModel != modelRefs.current[1]}
        disableSliders={selectedModel != modelRefs.current[1]}
      >
        <FloorLamp
          scale={2.8}
          onClick={() => handleModelClick(modelRefs.current[1], 1)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[1] = ref)}
          position={[-5, 0, -1]}
        />
      </PivotControls>

      {/* wall art 1 */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[2]}
        showX={selectedModel === modelRefs.current[2]}
        showY={selectedModel === modelRefs.current[2]}
        showZ={selectedModel === modelRefs.current[2]}
        size={0.5}
        position={[-5.8, 2.8, 0.5]}
      >
        <WallArt1
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[2], 2)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[2] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* wall art 4 */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[3]}
        showX={selectedModel === modelRefs.current[3]}
        showY={selectedModel === modelRefs.current[3]}
        showZ={selectedModel === modelRefs.current[3]}
        size={0.5}
        position={[-5.8, 2.8, 2.5]}
      >
        <WallArt4
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[3], 3)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[3] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* wall art 7 */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[4]}
        showX={selectedModel === modelRefs.current[4]}
        showY={selectedModel === modelRefs.current[4]}
        showZ={selectedModel === modelRefs.current[4]}
        size={0.5}
        position={[-5.8, 2.8, 4.5]}
      >
        <WallArt7
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[4], 4)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[4] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* blank frame*/}
      <TransformControls
        enabled={selectedModel === modelRefs.current[5]}
        showX={selectedModel === modelRefs.current[5]}
        showY={selectedModel === modelRefs.current[5]}
        showZ={selectedModel === modelRefs.current[5]}
        size={0.5}
        position={[-5.8, 2.8, 6.5]}
      >
        <BlankFrame
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[5], 5)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[5] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* desk chair */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[6]}
        showX={selectedModel === modelRefs.current[6]}
        showY={selectedModel === modelRefs.current[6]}
        showZ={selectedModel === modelRefs.current[6]}
        size={0.5}
        position={[1.7, 0, 2]}
      >
        <OfficeChair
          scale={2.5}
          onClick={() => handleModelClick(modelRefs.current[6], 6)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[6] = ref)}
          rotation-y={Math.PI}
        />
      </TransformControls>

      {/* shelf */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[7]}
        showX={selectedModel === modelRefs.current[7]}
        showY={selectedModel === modelRefs.current[7]}
        showZ={selectedModel === modelRefs.current[7]}
        size={0.5}
        position={[-2.7, 1.55, -1]}
      >
        <Shelf
          scale={1.8}
          onClick={() => handleModelClick(modelRefs.current[7], 7)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[7] = ref)}
          rotation-y={Math.PI * 0.5}
        />
      </TransformControls>

      {/* gundam */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[8]}
        showX={selectedModel === modelRefs.current[8]}
        showY={selectedModel === modelRefs.current[8]}
        showZ={selectedModel === modelRefs.current[8]}
        size={0.5}
        position={[-2.1, 2.5, -1]}
      >
        <Gundam
          scale={0.5}
          onClick={() => handleModelClick(modelRefs.current[8], 8)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[8] = ref)}
          rotation-y={Math.PI}
        />
      </TransformControls>

      {/* trophy */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[9]}
        showX={selectedModel === modelRefs.current[9]}
        showY={selectedModel === modelRefs.current[9]}
        showZ={selectedModel === modelRefs.current[9]}
        size={0.5}
        position={[-3.9, 3.4, -1]}
      >
        <Trophy
          scale={0.05}
          onClick={() => handleModelClick(modelRefs.current[9], 9)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[9] = ref)}
          rotation-y={Math.PI * 0.5}
        />
      </TransformControls>

      {/* clock */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[10]}
        showX={selectedModel === modelRefs.current[10]}
        showY={selectedModel === modelRefs.current[10]}
        showZ={selectedModel === modelRefs.current[10]}
        size={0.5}
        position={[0, 3, -1.7]}
      >
        <Clock
          scale={0.05}
          onClick={() => handleModelClick(modelRefs.current[10], 10)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[10] = ref)}
          rotation-y={Math.PI * 1.5}
        />
      </TransformControls>

      {/* TV */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[11]}
        showX={selectedModel === modelRefs.current[11]}
        showY={selectedModel === modelRefs.current[11]}
        showZ={selectedModel === modelRefs.current[11]}
        size={0.5}
        position={[7.2, 2.8, -1.6]}
      >
        <TV
          scale={1}
          onClick={() => handleModelClick(modelRefs.current[11], 11)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[11] = ref)}
          rotation-y={Math.PI * 2}
        />
      </TransformControls>

      {/* couch */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[12]}
        showX={selectedModel === modelRefs.current[12]}
        showY={selectedModel === modelRefs.current[12]}
        showZ={selectedModel === modelRefs.current[12]}
        size={0.5}
        position={[7, 0.6, 5]}
      >
        <Couch
          scale={3}
          onClick={() => handleModelClick(modelRefs.current[12], 12)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[12] = ref)}
          rotation-y={Math.PI * 2}
        />
      </TransformControls>

      {/* cofee table */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[13]}
        showX={selectedModel === modelRefs.current[13]}
        showY={selectedModel === modelRefs.current[13]}
        showZ={selectedModel === modelRefs.current[13]}
        size={0.5}
        position={[7, 0.8, 2]}
      >
        <CoffeeTable
          scale={2.3}
          onClick={() => handleModelClick(modelRefs.current[13], 13)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[13] = ref)}
          rotation-y={Math.PI * 2}
        />
      </TransformControls>

      {/* remote */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[14]}
        showX={selectedModel === modelRefs.current[14]}
        showY={selectedModel === modelRefs.current[14]}
        showZ={selectedModel === modelRefs.current[14]}
        size={0.5}
        position={[6, 1.2, 2]}
      >
        <Remote
          scale={0.008}
          onClick={() => handleModelClick(modelRefs.current[14], 14)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[14] = ref)}
          rotation-y={Math.PI * 0.3}
        />
      </TransformControls>

      {/* houseplant */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[15]}
        showX={selectedModel === modelRefs.current[15]}
        showY={selectedModel === modelRefs.current[15]}
        showZ={selectedModel === modelRefs.current[15]}
        size={0.5}
        position={[-4.8, 0, 8]}
      >
        <Houseplant
          scale={2}
          onClick={() => handleModelClick(modelRefs.current[15], 15)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[15] = ref)}
          rotation-y={Math.PI * 0.3}
        />
      </TransformControls>

      {/* shiba */}
      <TransformControls
        enabled={selectedModel === modelRefs.current[16]}
        showX={selectedModel === modelRefs.current[16]}
        showY={selectedModel === modelRefs.current[16]}
        showZ={selectedModel === modelRefs.current[16]}
        size={0.5}
        position={[-4, 0, 5]}
      >
        <Shiba
          scale={0.6}
          onClick={() => handleModelClick(modelRefs.current[16], 16)}
          onContextMenu={() => handleModelRightClick()}
          innerRef={(ref) => (modelRefs.current[16] = ref)}
          rotation-y={Math.PI * 0.3}
        />
      </TransformControls>
    </group>
  );
};

export default Room;

/* scale={props.scaleModifier}
      ref={props.innerRef} */
