import React, { useRef } from "react";
import MobileView from "../components/TemplateEditorPage/TemplateEditorPageViews/MobileView/MobileView";
import BigScreenView from "../components/TemplateEditorPage/TemplateEditorPageViews/BigScreenView/BigScreenView";

const TemplateEditorPage = () => {
  const objectRef = useRef({});
  return (
    <div className="w-full min-h-screen">
     <div className="lg:hidden">
     <MobileView objectRef={objectRef}/>
     </div>
     <div className="hidden lg:block">
     <BigScreenView objectRef={objectRef}/>
     </div>

      {/* <TemplateScale /> */}
    </div>
  );
};

export default TemplateEditorPage;
