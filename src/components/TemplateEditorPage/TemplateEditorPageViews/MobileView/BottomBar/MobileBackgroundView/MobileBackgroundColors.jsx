import React from "react";
import { background } from "../../../../../../data/backgrounds";
import { useDispatch } from "react-redux";
import { handleTemplateBackground } from "../../../../../../redux/slices/TemplateSlice";

const MobileBackgroundColors = () => {
  const dispatch = useDispatch()
  const handleBackgroundColor = (color) => {
    dispatch(handleTemplateBackground({ type: "color", color: color }));
  };
  return (
    <>
      <ul className="flex overflow-auto mobile-scrollbar items-center gap-x-1">
        {background[1].GradientColors.map((bgColor) => (
          <li
            key={bgColor.id}
            onClick={() => handleBackgroundColor(bgColor.color)}
          >
            <div
              className={`w-16 h-16 rounded-full`}
              style={{ backgroundColor: `${bgColor.color}` }}
            ></div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileBackgroundColors;
