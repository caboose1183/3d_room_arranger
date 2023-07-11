import { proxy } from "valtio";

const state = proxy({
  intro: true,
  selectedFurniture: null,
  transformMode: null,
  color: "#0076b6",
  isFullTexture: false,
  fullDecal: "./threejs.png",

});

export default state;
