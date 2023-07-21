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

import {
  IconTexture,
  IconWall,
  IconRobot,
  IconPhoto,
} from "@tabler/icons-react";

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

  const EditorTabs = [
    {
      name: "colorpicker",
      icon: <IconWall size={50} color={snap.wallColor} />,
    },
    {
      name: "filepicker",
      icon: <IconPhoto size={50} color={snap.wallColor} />,
    },
    {
      name: "aipicker",
      icon: <IconRobot size={50} color={snap.wallColor} />,
    },
  ];

  const TextureTabs = [
    {
      name: "fullTexture",
      icon: <IconTexture size={50} color={snap.wallColor} />,
    },
  ];

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
          <motion.div
            {...slideAnimation("up")}
            className="absolute z-10  w-full flex flex-wrap justify-center items-center gap-4 bottom-5 right-0 left-0"
          >
            {TextureTabs.map((tab) => (
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default RoomEdit;
