import React, { useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import { useSnapshot } from "valtio";

import state from "../store";

import Room from "./Room";
import Camera from "./Camera";
import Backsplash from "./Backsplash";

const CanvasArea = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      {/* <Camera> */}
      {/* <Backsplash /> */}
      {/* <Center> */}
      <Room />
      {/* </Center> */}
      {/* </Camera> */}
    </Canvas>
  );
};

export default CanvasArea;
