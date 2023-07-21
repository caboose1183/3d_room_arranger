import { proxy } from "valtio";

const state = proxy({
  intro: false,
  selectedFurniture: null,
  color: "#0076b6",
  wallColor: "#2e302f",
  isFullTexture: true,
  artTexture1: "./threejs.png",
  artTexture4: "./threejs.png",
  artTexture7: "./threejs.png",
  artTextureBlank: "./threejs.png",

});

export default state;
