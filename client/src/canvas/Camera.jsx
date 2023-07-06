import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";

const Camera = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  
  let initialPosition = [-0.4, 0, 2];

  return <group ref={group}>{children}</group>;
};

export default Camera;
