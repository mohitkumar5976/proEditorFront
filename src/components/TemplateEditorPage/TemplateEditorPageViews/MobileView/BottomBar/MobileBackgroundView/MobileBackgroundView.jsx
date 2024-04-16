import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import ImageIcon from "@mui/icons-material/Image";
import ChooseImageComponent from "../../../../../utils/ChooseImageComponent/ChooseImageComponent";
import MobileBackgroundColors from "./MobileBackgroundColors";
import MobileBackgroundImages from "./MobileBackgroundImages";
import { handleTemplateBackground } from "../../../../../../redux/slices/TemplateSlice";

const MobileBackgroundView = () => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();

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
 
  useEffect(() => {
    if (fileData != null) {
      dispatch(handleTemplateBackground({ type: "file", file: fileData }));
    }
  }, [fileData, dispatch]);
  return (
    <>
      <div className="h-36">
        <Tabs align="center">
          <TabList>
            <Tab>Upload</Tab>
            <Tab>Colors</Tab>
            <Tab>Backgrounds</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="relative mt-4">
                <div
                  onClick={() => imageRef.current.click()}
                  className="  cursor-pointer py-1.5 flex justify-center items-center gap-x-1 bg-blue-800 text-white lg:bg-gray-200"
                >
                  <ImageIcon /> Choose Image
                </div>
                <input
                  type="file"
                  ref={imageRef}
                  onChange={handleFileChange}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <MobileBackgroundColors />
            </TabPanel>
            <TabPanel>
              <MobileBackgroundImages />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default MobileBackgroundView;
