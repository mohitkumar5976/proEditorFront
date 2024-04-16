import React, { useRef, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";

const ChooseImageComponent = () => {
  const imageRef = useRef(null);
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFileData(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <div className="relative ">
      <div className="bg-gray-200 cursor-pointer absolute z-20 w-full py-1 flex justify-center items-center gap-x-1">
        <ImageIcon /> Choose Image
      </div>
      <input
        type="file"
        ref={imageRef}
        onChange={handleFileChange}
        className="absolute top-0 "
      />
    </div>
  );
};

export default ChooseImageComponent;
