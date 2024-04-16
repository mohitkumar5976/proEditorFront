import React, { useRef } from "react";
import Stickerbar from "./Stickerbar/Stickerbar";
import TemplatePanel from "./TemplatePanel/TemplatePanel";
import { useDispatch, useSelector } from "react-redux";
import {
  handleMouseMove,
  handleMouseUpOnObject,
  handleTouchMove,
  handleTouchUpOnObject,
} from "../../../redux/slices/CommonSlice";
import TextBar from "./TextBar/TextBar";

const TemplateEditor = ({ objectRef }) => {
  const dispatch = useDispatch();
  const droppedItems = useSelector((state) => state.common.droppedItems);
  return (
    <div className="bg-zinc-300 flex-1 relative">
      <div className={"py-4 w-full flex justify-center items-center absolute  h-[100px]"}>
        {droppedItems.length !== 0 ? (
          <>
            <Stickerbar />
            <TextBar />
          </>
        ) : null}
      </div>
      <div
        className={`absolute bg-red-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 parentPanel`}
        onMouseMove={(e) =>
          dispatch(
            handleMouseMove({
              eventX: e.clientX,
              eventY: e.clientY,
            })
          )
        }
        onTouchMove={(e) =>
          dispatch(
            handleTouchMove({
              eventX: e.touches[0].clientX ,
              eventY: e.touches[0].clientY ,
            })
          )
        }
        onTouchEnd={() => dispatch(handleTouchUpOnObject())}
        onMouseUp={() => dispatch(handleMouseUpOnObject())}
      >
        <TemplatePanel objectRef={objectRef} />
      </div>
    </div>
  );
};

export default TemplateEditor;
