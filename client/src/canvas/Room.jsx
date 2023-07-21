import React, { useRef, useState } from "react";

import * as THREE from "three";
import { PivotControls } from "@react-three/drei";

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

const Room = ({}) => {
  // const snap = useSnapshot(state);
  const {wallColor} = state
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
    color: wallColor,
    metalness: 0,
    roughness: 1,
  });

  const stateString = JSON.stringify(wallColor);

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
        scale={2}
        disableAxes={selectedModel != modelRefs.current[0]}
        disableRotations={selectedModel != modelRefs.current[0]}
        disableSliders={selectedModel != modelRefs.current[0]}
        visible={selectedModel === modelRefs.current[0]}
      >
        <Desk
          onClick={() => handleModelClick(modelRefs.current[0], 0)}
          onContextMenu={() => handleModelRightClick()}
          scale={2}
          position={[1, 0, -13]}
          rotation-y={Math.PI * 1}
          innerRef={(ref) => (modelRefs.current[0] = ref)}
        />
      </PivotControls>

      {/* floor lamp */}
      <PivotControls
        scale={1.5}
        offset={[-5, 0, -1]}
        disableAxes={selectedModel != modelRefs.current[1]}
        disableRotations={selectedModel != modelRefs.current[1]}
        disableSliders={selectedModel != modelRefs.current[1]}
        visible={selectedModel === modelRefs.current[1]}
      >
        <FloorLamp
          onClick={() => handleModelClick(modelRefs.current[1], 1)}
          onContextMenu={() => handleModelRightClick()}
          scale={2.8}
          position={[-5, 0, -1]}
          innerRef={(ref) => (modelRefs.current[1] = ref)}
        />
      </PivotControls>

      {/* wall art 1 */}
      <PivotControls
        offset={[-5.8, 2.8, 0.5]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[2]}
        disableRotations={selectedModel != modelRefs.current[2]}
        disableSliders={selectedModel != modelRefs.current[2]}
        visible={selectedModel === modelRefs.current[2]}
      >
        <WallArt1
          onClick={() => handleModelClick(modelRefs.current[2], 2)}
          onContextMenu={() => handleModelRightClick()}
          scale={3}
          position={[-5.8, 2.8, 0.5]}
          rotation-y={Math.PI * 1.5}
          innerRef={(ref) => (modelRefs.current[2] = ref)}
        />
      </PivotControls>

      {/* wall art 4 */}
      <PivotControls
        offset={[-5.8, 2.8, 2.5]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[3]}
        disableRotations={selectedModel != modelRefs.current[3]}
        disableSliders={selectedModel != modelRefs.current[3]}
        visible={selectedModel === modelRefs.current[3]}
      >
        <WallArt4
          onClick={() => handleModelClick(modelRefs.current[3], 3)}
          onContextMenu={() => handleModelRightClick()}
          scale={3}
          position={[-5.8, 2.8, 2.5]}
          rotation-y={Math.PI * 1.5}
          innerRef={(ref) => (modelRefs.current[3] = ref)}
        />
      </PivotControls>

      {/* wall art 7 */}
      <PivotControls
        offset={[-5.8, 2.8, 4.5]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[4]}
        disableRotations={selectedModel != modelRefs.current[4]}
        disableSliders={selectedModel != modelRefs.current[4]}
        visible={selectedModel === modelRefs.current[4]}
      >
        <WallArt7
          onClick={() => handleModelClick(modelRefs.current[4], 4)}
          onContextMenu={() => handleModelRightClick()}
          scale={3}
          position={[-5.8, 2.8, 4.5]}
          rotation-y={Math.PI * 1.5}
          innerRef={(ref) => (modelRefs.current[4] = ref)}
        />
      </PivotControls>

      {/* blank frame*/}
      <PivotControls
        offset={[-5.8, 2.8, 6.5]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[5]}
        disableRotations={selectedModel != modelRefs.current[5]}
        disableSliders={selectedModel != modelRefs.current[5]}
        visible={selectedModel === modelRefs.current[5]}
      >
        <BlankFrame
          onClick={() => handleModelClick(modelRefs.current[5], 5)}
          onContextMenu={() => handleModelRightClick()}
          scale={3}
          position={[-5.8, 2.8, 6.5]}
          rotation-y={Math.PI * 1.5}
          innerRef={(ref) => (modelRefs.current[5] = ref)}
        />
      </PivotControls>

      {/* desk chair */}
      <PivotControls
        offset={[1.7, 0, 2]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[6]}
        disableRotations={selectedModel != modelRefs.current[6]}
        disableSliders={selectedModel != modelRefs.current[6]}
        visible={selectedModel === modelRefs.current[6]}
      >
        <OfficeChair
          onClick={() => handleModelClick(modelRefs.current[6], 6)}
          onContextMenu={() => handleModelRightClick()}
          scale={2.5}
          position={[1.7, 0, 2]}
          rotation-y={Math.PI}
          innerRef={(ref) => (modelRefs.current[6] = ref)}
        />
      </PivotControls>

      {/* shelf */}
      <PivotControls
        offset={[-2.7, 0, -1]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[7]}
        disableRotations={selectedModel != modelRefs.current[7]}
        disableSliders={selectedModel != modelRefs.current[7]}
        visible={selectedModel === modelRefs.current[7]}
      >
        <Shelf
          onClick={() => handleModelClick(modelRefs.current[7], 7)}
          onContextMenu={() => handleModelRightClick()}
          scale={1.8}
          position={[-2.7, 1.55, -1]}
          rotation-y={Math.PI * 0.5}
          innerRef={(ref) => (modelRefs.current[7] = ref)}
        />
      </PivotControls>

      {/* gundam */}
      <PivotControls
        offset={[-2.1, 1.9, -1]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[8]}
        disableRotations={selectedModel != modelRefs.current[8]}
        disableSliders={selectedModel != modelRefs.current[8]}
        visible={selectedModel === modelRefs.current[8]}
      >
        <Gundam
          onClick={() => handleModelClick(modelRefs.current[8], 8)}
          onContextMenu={() => handleModelRightClick()}
          scale={0.5}
          rotation-y={Math.PI}
          position={[-2.1, 2.5, -1]}
          innerRef={(ref) => (modelRefs.current[8] = ref)}
        />
      </PivotControls>

      {/* trophy */}
      <PivotControls
        offset={[-3.9, 3.4, -1]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[9]}
        disableRotations={selectedModel != modelRefs.current[9]}
        disableSliders={selectedModel != modelRefs.current[9]}
        visible={selectedModel === modelRefs.current[9]}
      >
        <Trophy
          onClick={() => handleModelClick(modelRefs.current[9], 9)}
          onContextMenu={() => handleModelRightClick()}
          scale={0.05}
          position={[-3.9, 3.4, -1]}
          rotation-y={Math.PI * 0.5}
          innerRef={(ref) => (modelRefs.current[9] = ref)}
        />
      </PivotControls>

      {/* clock */}
      <PivotControls
        offset={[0, 3.7, -1.7]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[10]}
        disableRotations={selectedModel != modelRefs.current[10]}
        disableSliders={selectedModel != modelRefs.current[10]}
        visible={selectedModel === modelRefs.current[10]}
      >
        <Clock
          onClick={() => handleModelClick(modelRefs.current[10], 10)}
          onContextMenu={() => handleModelRightClick()}
          scale={0.05}
          position={[0, 3, -1.7]}
          rotation-y={Math.PI * 1.5}
          innerRef={(ref) => (modelRefs.current[10] = ref)}
        />
      </PivotControls>

      {/* TV */}
      <PivotControls
        offset={[6.8, 3, -1.6]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[11]}
        disableRotations={selectedModel != modelRefs.current[11]}
        disableSliders={selectedModel != modelRefs.current[11]}
        visible={selectedModel === modelRefs.current[11]}
      >
        <TV
          onClick={() => handleModelClick(modelRefs.current[11], 11)}
          onContextMenu={() => handleModelRightClick()}
          scale={1}
          position={[7.2, 2.8, -1.6]}
          rotation-y={Math.PI * 2}
          innerRef={(ref) => (modelRefs.current[11] = ref)}
        />
      </PivotControls>

      {/* couch */}
      <PivotControls
        offset={[7, 0.6, 5]}
        rotation={[0, Math.PI, 0]}
        scale={3}
        disableAxes={selectedModel != modelRefs.current[12]}
        disableRotations={selectedModel != modelRefs.current[12]}
        disableSliders={selectedModel != modelRefs.current[12]}
        visible={selectedModel === modelRefs.current[12]}
      >
        <Couch
          onClick={() => handleModelClick(modelRefs.current[12], 12)}
          onContextMenu={() => handleModelRightClick()}
          scale={3}
          position={[7, 0.6, 5]}
          rotation-y={Math.PI * 2}
          innerRef={(ref) => (modelRefs.current[12] = ref)}
        />
      </PivotControls>

      {/* cofee table */}
      <PivotControls
        offset={[6.8, 0, 2]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[13]}
        disableRotations={selectedModel != modelRefs.current[13]}
        disableSliders={selectedModel != modelRefs.current[13]}
        visible={selectedModel === modelRefs.current[13]}
      >
        <CoffeeTable
          onClick={() => handleModelClick(modelRefs.current[13], 13)}
          onContextMenu={() => handleModelRightClick()}
          scale={2.3}
          position={[7, 0.8, 2]}
          rotation-y={Math.PI * 2}
          innerRef={(ref) => (modelRefs.current[13] = ref)}
        />
      </PivotControls>

      {/* remote */}
      <PivotControls
        offset={[6, 1.2, 2]}
        scale={1}
        disableAxes={selectedModel != modelRefs.current[14]}
        disableRotations={selectedModel != modelRefs.current[14]}
        disableSliders={selectedModel != modelRefs.current[14]}
        visible={selectedModel === modelRefs.current[14]}
      >
        <Remote
          onClick={() => handleModelClick(modelRefs.current[14], 14)}
          onContextMenu={() => handleModelRightClick()}
          scale={0.008}
          position={[6, 1.2, 2]}
          rotation-y={Math.PI * 0.3}
          innerRef={(ref) => (modelRefs.current[14] = ref)}
        />
      </PivotControls>

      {/* houseplant */}
      <PivotControls
        offset={[-4.8, 0, 8]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[15]}
        disableRotations={selectedModel != modelRefs.current[15]}
        disableSliders={selectedModel != modelRefs.current[15]}
        visible={selectedModel === modelRefs.current[15]}
      >
        <Houseplant
          onClick={() => handleModelClick(modelRefs.current[15], 15)}
          onContextMenu={() => handleModelRightClick()}
          scale={2}
          position={[-4.8, 0, 8]}
          rotation-y={Math.PI * 0.3}
          innerRef={(ref) => (modelRefs.current[15] = ref)}
        />
      </PivotControls>

      {/* shiba */}
      <PivotControls
        offset={[-4, 0, 5]}
        scale={1.5}
        disableAxes={selectedModel != modelRefs.current[16]}
        disableRotations={selectedModel != modelRefs.current[16]}
        disableSliders={selectedModel != modelRefs.current[16]}
        visible={selectedModel === modelRefs.current[16]}
      >
        <Shiba
          onClick={() => handleModelClick(modelRefs.current[16], 16)}
          onContextMenu={() => handleModelRightClick()}
          scale={0.6}
          position={[-4, 0, 5]}
          rotation-y={Math.PI * 0.3}
          innerRef={(ref) => (modelRefs.current[16] = ref)}
        />
      </PivotControls>
    </group>
  );
};

export default Room;

/* scale={props.scaleModifier}
      ref={props.innerRef} */
