import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EditorPanel = () => {
  const industryTemplateData = useSelector((state) => state.template.template);
  console.log(industryTemplateData)
  return (
    <div className="px-2 lg:hidden">
      <img className="w-full h-full" src={`${industryTemplateData.THUMB_URI}`} alt="" />
    </div>
  );
};

export default EditorPanel;
