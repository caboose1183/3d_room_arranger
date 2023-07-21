import { useState, useRef } from "react";

import Canvas from "./canvas";
import RoomEdit from "./pages/RoomEdit";
import Home from "./pages/Home";

function App() {
  return (
    <main className=" relative w-full h-screen overflow-hidden transition-all ease-in">
      {/* <h1 className="text-black leading-[10rem] xl:leading-[11rem] text-[4rem] xl:text-[6rem]">
        Let's Make You Dream Room
      </h1> */}

      <Home />
      <Canvas />
      <RoomEdit />
    </main>
  );
}

export default App;
