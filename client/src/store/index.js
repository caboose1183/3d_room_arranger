import { proxy } from "valtio";

const state = proxy({
  intro: false,
  selectedFurniture: null,
  color: "#0076b6",
  wallColor: "#2e302f",
  isFullTexture: true,
  fullDecal: "./threejs.png",

});

export default state;
