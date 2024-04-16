import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDroppedItem,
  handleHistoryItems,
} from "../../../../redux/slices/CommonSlice";
import {
  getIndustryTemplateFromLocalStorage,
  loadTemplateById,
} from "../../../../redux/slices/TemplateSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 as uuidv4 } from "uuid";
import Sticker from "./Sticker/Sticker";
import Text from "./Text/Text";
import { useParams } from "react-router-dom";

const TemplatePanel = ({ objectRef }) => {
  const uniqueId = uuidv4();
  const { id } = useParams();
  const template = useSelector((state) => state.template.template);
  const droppedItems = useSelector((state) => state.common.droppedItems);
  const templateBackground = useSelector(
    (state) => state.template.templateBackground
  );
  const dispatch = useDispatch();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));

    const { CategoryName, ThumbPath, IsFree, ...remaining } = droppedItem;

    const stickerItem = {
      id: uniqueId.toString(),
      type: "s",
      x: 30,
      y: 30,
      width: 80,
      height: 80,
      borderColor: "#000000",
      flip: {
        type: "horizontal",
        HorizontalState: false,
        VerticalState: false,
      },
      opacity: 1,
      rotationAngle: 0,
      CategoryName: CategoryName,
      ThumbPath: ThumbPath,
      IsFree: IsFree,
    };
    if (!droppedItems.includes(stickerItem)) {
      const updatedItems = [...droppedItems, stickerItem];
      dispatch(addDroppedItem(updatedItems));
    }
  };

  useEffect(() => {
    dispatch(loadTemplateById(id));
  }, [id]);
  return (
    <>
      {template === null ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            key={template.id}
            className="w-[380px] h-[380px] md:w-[500px] md:h-[500px]"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {templateBackground.type === "color" ? (
              <div
                className="absolute top-0 w-full h-full"
                style={{
                  backgroundColor: `${templateBackground.color}`,
                }}
              ></div>
            ) : templateBackground.type === "file" ? (
              <img
                className="w-full h-full templatePanel"
                src={`${templateBackground.file}`}
                alt=""
              />
            ) : (
              <img
                className="w-full h-full templatePanel"
                src={`${template.THUMB_URI}`}
                alt=""
              />
            )}

            {droppedItems.map((obj) =>
              obj.type === "t" ? (
                <Text key={obj.id} obj={obj} objectRef={objectRef} />
              ) : (
                <Sticker key={obj.id} obj={obj} objectRef={objectRef} />
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TemplatePanel;
