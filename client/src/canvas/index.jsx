import React from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Room from "./Room";
import Camera from "./Camera";
import Backsplash from "./Backsplash";

const CanvasArea = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      {/* <Camera>
        <Backsplash /> */}
        <Center>
          <Room />
        </Center>
      {/* </Camera> */}
    </Canvas>
  );
};

export default CanvasArea;
