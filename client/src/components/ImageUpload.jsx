import React from "react";

import CustomButton from "./CustomButton";

import { useSnapshot } from "valtio";
import state from "../store";

const ImageUpload = ({ file, setFile }) => {
  const snap = useSnapshot(state);

  const handleClick = () => {
    state.isFullTexture = !snap.isFullTexture;
  };


  const applyFile = (file) => {
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
  };

  return (
    <div className="absolute glass left-full flex flex-col ml-3 p-3 w-[200px] h-[250px] rounded-md">
      <div className="flex flex-1 flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <p className="truncate text-gray-500 text-cs mt-2">
          {file === "" ? "No File Selected" : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton
          type="filled"
          title="Apply"
          handleClick={() => state.isFullTexture = true}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
