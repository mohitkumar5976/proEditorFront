import React, { useEffect } from "react";
import UTurnRightIcon from "@mui/icons-material/UTurnRight";
import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Tooltip } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  addDroppedItem,
  handleCurrentIndex,
} from "../../../../redux/slices/CommonSlice";

const UndRedo = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.common.droppedItems);
  const history = useSelector((state) => state.common.historyItems);
  const currentIndex = useSelector((state) => state.common.currentIndex);
  console.log("items", items);
  console.log("index", currentIndex);
  console.log("history", history);
  useEffect(() => {
    const currentState = history[currentIndex];
    if (currentState !== undefined && currentState !== items) {
      console.log("currState", currentState);
      dispatch(addDroppedItem(currentState));
    }
  }, [currentIndex, history, items]);

  const handleUndo = () => {
    console.log("undo");
    if (currentIndex > 0) {
      dispatch(handleCurrentIndex(currentIndex - 1));
    }
  };

  const handleRedo = () => {
    console.log("redo");
    if (currentIndex < history.length - 1) {
      dispatch(handleCurrentIndex(currentIndex + 1));
    }
  };

  const handleReset = () => {};
  return (
    <>
      <Tooltip label="Undo" placement="bottom">
        <div
          onClick={() => {
            if (currentIndex > 0) {
              handleUndo();
            }
          }}
          disabled={currentIndex <= 0}
        >
          <UTurnLeftIcon
            className={`${currentIndex <= 0 ? null : "text-gray-500"} `}
            style={{ transform: "rotate(90deg)", cursor: "pointer" }}
          />
        </div>
      </Tooltip>
      <Tooltip label="Redo" placement="bottom">
        <div
          onClick={() => {
            if (currentIndex >= history.length - 1) {
              handleRedo();
            }
          }}
          disabled={currentIndex >= history.length - 1}
        >
          <UTurnRightIcon
            className={`${
              currentIndex >= history.length - 1 ? null : "text-gray-500"
            }`}
            style={{ transform: "rotate(-90deg)", cursor: "pointer" }}
          />
        </div>
      </Tooltip>
      <Tooltip label="Reset" placement="bottom">
        <div onClick={handleReset}>
          <RestartAltIcon style={{ cursor: "pointer" }} />
        </div>
      </Tooltip>
    </>
  );
};

export default UndRedo;
