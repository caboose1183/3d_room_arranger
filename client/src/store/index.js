import { proxy } from "valtio";

const state = proxy({
  intro: false,
  selectedFurniture: null,
  transformMode: null,
  color: "#0076b6",
  isFullTexture: true,
  fullDecal: "./threejs.png",

});

export default state;
