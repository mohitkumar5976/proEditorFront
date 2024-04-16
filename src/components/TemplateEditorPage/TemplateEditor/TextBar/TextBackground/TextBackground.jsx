import React, { useEffect } from "react";
import { handleBackgroundColor } from "../../../../../redux/slices/TextSlice";
import { useDispatch, useSelector } from "react-redux";
import { textColors } from "../../../../../data/textColos";
import { handleTextProperties } from "../../../../../redux/slices/CommonSlice";

const TextBackground = () => {
  const dispatch = useDispatch();
  const textBackgroundColorDrawer = useSelector(
    (state) => state.drawer.textBackgroundColor
  );
  const backgroundColor = useSelector((state) => state.text.backgroundColor);
  const selectedObject = useSelector((state) => state.common.selectedObject);

  useEffect(() => {
    if (selectedObject) {
      dispatch(
        handleTextProperties({
          type: "textBgColor",
          bgColor: backgroundColor,
        })
      );
    }
  }, [backgroundColor]);

  return (
    <div
    className={`${
      textBackgroundColorDrawer ? "block" : "hidden"
    } lg:w-1/4 lg:min-h-screen p-2 lg:flex lg:flex-col lg:gap-y-5`}
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 font-semibold text-xs">
            Text Background colors
          </p>
          <p
            onClick={() =>
              dispatch(
                handleTextProperties({ type: "rb", bgColor: "#FFFFFF00" })
              )
            }
            className="text-gray-500 font-semibold text-xs cursor-pointer"
          >
            Reset
          </p>
        </div>
        <div className="flex items-center gap-x-1 lg:grid lg:grid-cols-8 lg:gap-x-3">
          {textColors.map((txtColor) => (
            <div
              key={txtColor.id}
              style={{ backgroundColor: `${txtColor.color}` }}
              onClick={() =>
                dispatch(
                  handleBackgroundColor({
                    textBgColor: txtColor.color,
                  })
                )
              }
              className="w-16 h-16 cursor-pointer rounded-full border border-1 "
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextBackground;
