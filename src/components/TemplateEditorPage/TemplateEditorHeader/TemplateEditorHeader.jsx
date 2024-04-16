import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DownloadButton from "./DownloadButton/DownloadButton";
import UndoRedo from "./UndoRedo/UndRedo";

const TemplateEditorHeader = () => {
  const items = useSelector((state) => state.common.droppedItems);
  return (
    <div className="flex justify-between items-center px-5 py-2 border border-b-1 border-b-gray-300">
      <div className="flex justify-center items-center gap-x-1.5">
        <Link to="/" className="flex items-center">
          <HomeIcon /><span className="hidden lg:block"> Home</span>
        </Link>
      </div>
      <div
        className={`flex items-center gap-x-3 ${
          items.length !== 0 ? "text-black" : "text-gray-500"
        }`}
      >
        <UndoRedo />
      </div>
      <div className="flex justify-center items-center gap-x-1.5">
        <DownloadButton />
      </div>
    </div>
  );
};

export default TemplateEditorHeader;
