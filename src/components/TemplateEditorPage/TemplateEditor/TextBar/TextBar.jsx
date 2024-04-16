import React from "react";
import { Tooltip } from "@mui/material";
import TextAlignment from "./TextAlignment/TextAlignment";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteDroppedObject } from "../../../../redux/slices/CommonSlice";
import {
  handleTextBackgroundColorsDrawer,
  handleTextColorsDrawer,
} from "../../../../redux/slices/DrawerStateSlice";
import TextSize from "./TextSize/TextSize";
import TextOpacity from "./TextOpacity/TextOpacity";
import {
  handleTextBold,
  handleTextItalic,
} from "../../../../redux/slices/TextSlice";
import TextBold from "./TextBold/TextBold";
import TextItalicFont from "./TextItalic/TextItalic";
import TextDuplicate from "./TextDuplicate/TextDuplicate";
import TextCase from "./TextCase/TextCase";
import Position from "../Stickerbar/Position/Position";

const TextBar = () => {
  const dispatch = useDispatch();
  const selectedObject = useSelector((state) => state.common.selectedObject);
  const textItems = useSelector((state) => state.common.textItems);
  const textColor = useSelector((state) => state.text.textColor);
  const background = useSelector((state) => state.text.backgroundColor);

  return (
    <ul
      className={`${
        selectedObject && selectedObject.type === "t" && textItems.length !== 0
          ? "block"
          : "hidden"
      } w-full overflow-auto flex justify-center items-center gap-x-4 h-[40px] mobile-scrollbar md:w-fit md:rounded-full px-4 bg-white`}
    >
      <li style={{ marginLeft: "150px" }}>
        <TextSize />
      </li>

      <li>
        <Tooltip title="Color" placement="top" arrow>
          <div
            onClick={() => dispatch(handleTextColorsDrawer())}
            className={`w-5 h-5 rounded-full cursor-pointer`}
            style={{
              backgroundColor: `${textColor !== "" ? textColor : "#000000"}`,
            }}
          ></div>
        </Tooltip>
      </li>

      <li>
        <Tooltip title="Background" placement="top" arrow>
          <div
            onClick={() => dispatch(handleTextBackgroundColorsDrawer())}
            className={`w-5 h-5 rounded-full cursor-pointer`}
            style={{
              backgroundColor: `${background !== "" ? background : "#0000FF"}`,
            }}
          ></div>
        </Tooltip>
      </li>
      <li className="cursor-pointer">
        <TextAlignment />
      </li>

      <li>
        <Tooltip title="Opacity" placement="top" arrow>
          <div className="cursor-pointer">
            <TextOpacity />
          </div>
        </Tooltip>
      </li>

      <li>
        <div className="cursor-pointer">
          <TextCase />
        </div>
      </li>

      <li>
        <Tooltip title="Bold" placement="top" arrow>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(handleTextBold())}
          >
            <TextBold />
          </div>
        </Tooltip>
      </li>

      <li>
        <Tooltip title="Italic" placement="top" arrow>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(handleTextItalic())}
          >
            <TextItalicFont />
          </div>
        </Tooltip>
      </li>

      <li>
        <Tooltip title="Position" placement="top" arrow>
          <div className="cursor-pointer">
            <Position />
          </div>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Duplicate" placement="top" arrow>
          <div className="cursor-pointer">
            <TextDuplicate />
          </div>
        </Tooltip>
      </li>

      <li>
        <Tooltip title="Delete" placement="top" arrow>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(deleteDroppedObject({ type: "t" }))}
          >
            <DeleteIcon />
          </div>
        </Tooltip>
      </li>
    </ul>
  );
};

export default TextBar;
