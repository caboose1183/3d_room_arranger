import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import { fadeAnimation, slideAnimation } from "../config/motion";

import {
  CustomButton,
  AIGenerator,
  ColorGenerator,
  FileGenerator,
  Tab,
} from "../components";

import { IconArrowsMove, IconRotateClockwise } from "@tabler/icons-react";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: "",
  },
  {
    name: "filepicker",
    icon: "",
  },
  {
    name: "aipicker",
    icon: "",
  },
];

export const TransformTabs = [
  {
    name: "rotate",
    icon: <IconRotateClockwise />,
  },
  {
    name: "translate",
    icon: <IconArrowsMove />,
  },
];

// export const DecalTypes = {
//   logo: {
//     stateProperty: "logoDecal",
//     filterTab: "logoShirt",
//   },
//   full: {
//     stateProperty: "fullDecal",
//     filterTab: "stylishShirt",
//   },
// };

function RoomEdit() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* container for all editor tabs animation */}
          <motion.div
            key="custom"
            className="absolute z-10 top-0 left-0 "
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="glass flex flex-col justify-center items-center w-16 ml-1 py-4 gap-4 border-[2px] rounded-lg">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* button to go back */}
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              extraStyles="w-fit text-sm font-bold px-4 py-2.5"
            />
          </motion.div>

          {/* bottom texture type */}
          {/* <motion.div
            {...slideAnimation("up")}
            className="absolute z-10  w-full flex flex-wrap justify-center items-center gap-4 bottom-5 right-0 left-0"
          >
            {TransformTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                transformMode={null}
                isTransformTab
                isActive=""
                handleClick={() => {
                  
                }}
              />
            ))}
          </motion.div> */}
        </>
      )}
    </AnimatePresence>
  );
}

export default RoomEdit;
