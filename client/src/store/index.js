import { proxy } from "valtio";

const state = proxy({
  intro: false,
  selectedFurniture: null,
  transformMode: "translate",
  color: "#0076b6",
  isFullTexture: true,
  fullDecal: "./threejs.png",

});

export default state;
