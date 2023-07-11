import { proxy } from "valtio";

const state = proxy({
  intro: true,
  selectedFurniture: null,
  transformMode: null,
  color: "#0076b6",
  isLogoTexture: false,
  isFullTexture: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",

});

export default state;
