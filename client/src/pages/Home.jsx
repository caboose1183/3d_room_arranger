import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import {
  headContainerAnimation,
  headContentAnimation,
  headTitleAnimation,
  slideAnimation,
} from "../config/motion";

import { CustomButton } from "../components";

import state from "../store";

function Home() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="absolute z-10 w-fit xl:h-full max-xl:gap-7 flex justify-start  items-start flex-col xl:justify-between p-6 sm:p-8 xl:py-8 xl:px-36"
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            {/* image? */}
          </motion.header>

          {/* hold title and info text */}
          <motion.div
            className="flex flex-1 flex-col justify-start xl:justify-center gap-10"
            {...headContainerAnimation}
          >
            <motion.div {...headTitleAnimation}>
              <h1 className="text-black text-[6rem] xl:text-[8rem] leading-[7rem] xl:leading-[8rem]">
                Make Your <br className="hidden xl:block" /> Dream Room
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md text-gray-600 text-[1.5rem]">
                Create your very own dream room!
                <br />
                Don't like where the desk is? <strong>Move it!</strong>
                <br /> Want to turn the shelf more? <strong>Rotate it!</strong>
                <br /> Don't like the artwork! <strong>Change it! </strong>
                <br />
                <strong>Make what you want!</strong>
              </p>

              <CustomButton
                type="filled"
                title="Let's Start!"
                handleClick={() => (state.intro = false)}
                extraStyles="w-fit text-sm font-bold px-4 py-2.5"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
