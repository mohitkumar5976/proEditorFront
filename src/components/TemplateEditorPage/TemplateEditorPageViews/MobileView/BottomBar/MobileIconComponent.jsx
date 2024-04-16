import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStickers } from "../../../../../redux/slices/StickerSlice";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import {
  addDroppedItem,
  addStickerItem,
  handleSetReplaceIcon,
} from "../../../../../redux/slices/CommonSlice";
import { v4 as uuidv4 } from "uuid";

const MobileIconComponent = () => {
  const uniqueId = uuidv4();
  const dispatch = useDispatch();
  const icons = useSelector((state) => state.drawer.icons);
  const stickers = useSelector((state) => state.sticker.stickers);
  const replacedSelectedObject = useSelector((state) => state.sticker.replacedSelectedObject);

  const droppedItems = useSelector((state) => state.common.droppedItems);
  const stickerItems = useSelector((state) => state.common.stickerItems);

  const loading = useSelector((state) => state.sticker.loading);
  const error = useSelector((state) => state.sticker.error);

  const addStickerOnTouch = (e, sticker) => {
    const { CategoryName, ThumbPath, IsFree, ...remaining } = sticker;

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
    if (!stickerItems.includes(stickerItem)) {
      const updatedItems = [...stickerItems, stickerItem];
      dispatch(addStickerItem(updatedItems));
    }

    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(loadStickers());
  }, [dispatch]);

  if (error)
    return (
      <Alert severity="error" className="fixed top-0 w-full">
        {error}
      </Alert>
    );
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-2 h-16">
          <CircularProgress />
        </div>
      ) : (
        <ul
          className={`${
            icons ? "block" : "hidden"
          } flex w-full h-18 overflow-auto mobile-scrollbar gap-x-1 bg-gray-200`}
          style={{ overflowY: "scroll" }}
        >
          {stickers && stickers.length !== 0
            ? stickers.Images.map((sticker, index) => {
                return (
                  <li
                    key={index}
                    onClick={() =>
                      dispatch(
                        handleSetReplaceIcon({
                          replacedValue: replacedSelectedObject,
                          stickerData: sticker,
                        })
                      )
                    }

                   
                  >
                    <div className="cursor-pointer w-16 h-16"  onClick={(e) => addStickerOnTouch(e, sticker)}>
                      <img
                        src={`${sticker.ImagePath}`}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                  </li>
                );
              })
            : "data not found"}
        </ul>
      )}
    </>
  );
};

export default MobileIconComponent;
