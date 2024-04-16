import React from "react";
import { background } from "../../../../../../data/backgrounds";
import { handleTemplateBackground } from "../../../../../../redux/slices/TemplateSlice";
import { useDispatch } from "react-redux";

const MobileBackgroundImages = () => {
  const  dispatch = useDispatch()
  return (
    <>
      <ul className="flex overflow-auto mobile-scrollbar items-center gap-x-1">
        {background[2].backgroundImages.map((bgImage) => (
          <li
            key={bgImage.id}
            onClick={() =>
              dispatch(
                handleTemplateBackground({ type: "file", file: bgImage.url })
              )
            }
          >
            <div className=" w-12 h-20">
              <img
                src={`${bgImage.url}`}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileBackgroundImages;
