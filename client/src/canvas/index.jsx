import React, { Suspense, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Center, OrbitControls, Loader } from "@react-three/drei";
import { useSnapshot } from "valtio";

import state from "../store";

import Room from "./Room";
import Camera from "./Camera";
import Backsplash from "./Backsplash";

const CanvasArea = () => {
  const snap = useSnapshot(state);

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [7.5, 5, 15],
        }}
      >
        <color attach="background" args={["#ad9baa"]} />
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        {/* <Backsplash /> */}

        <Suspense fallback={null}>
          <Room />
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
};

export default CanvasArea;
