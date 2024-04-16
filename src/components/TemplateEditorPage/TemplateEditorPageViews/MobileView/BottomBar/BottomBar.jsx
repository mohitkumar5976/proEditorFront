import React from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import TextureIcon from "@mui/icons-material/Texture";
import { useDispatch, useSelector } from "react-redux";
import {
  handleBackgroundDrawer,
  handleIconDrawer,
  handleTextDrawer,
} from "../../../../../redux/slices/DrawerStateSlice";
import { TextT } from "@phosphor-icons/react";

const BottomBar = () => {
  const dispatch = useDispatch();
  const icons = useSelector((state) => state.drawer.icons);
  const text = useSelector((state) => state.drawer.text);
  const backgrounds = useSelector((state) => state.drawer.backgrounds);
  return (
    <ul className="flex border border-r-1 border-r-gray-300 cursor-pointer">
      <li
        onClick={() => dispatch(handleIconDrawer())}
        className={`${
          icons ? "bg-red-700 hover:text-white text-white" : "bg-white"
        }  flex flex-col w-full p-1.5 justify-center items-center  hover:text-blue-700`}
      >
        <span
          className={`${
            icons ? "bg-white text-black " : "bg-zinc-200 "
          } p-1 rounded-md`}
        >
          <AddReactionIcon />
        </span>

        <span className="text-xs font-semibold">Icons</span>
      </li>
      <li
        className={`${
          text ? "bg-red-700 hover:text-white text-white" : "bg-white"
        }  flex flex-col w-full p-1.5 justify-center items-center  hover:text-blue-700`}
        onClick={() => dispatch(handleTextDrawer())}
      >
        <span
          className={`${
            text ? "bg-white text-black " : "bg-zinc-200 "
          } p-1 rounded-md`}
        >
          <TextT size={32} />
        </span>
        <span className="text-xs font-semibold">Text</span>
      </li>
      <li
        className={`${
          backgrounds ? "bg-red-700 hover:text-white text-white" : "bg-white"
        }  flex flex-col w-full p-1.5 justify-center items-center  hover:text-blue-700`}
        onClick={() => dispatch(handleBackgroundDrawer())}
      >
        <span
          className={`${
            backgrounds ? "bg-white text-black " : "bg-zinc-200 "
          } p-1 rounded-md`}
        >
          <TextureIcon />
        </span>
        <span className="text-xs font-semibold">Background</span>
      </li>
    </ul>
  );
};

export default BottomBar;
