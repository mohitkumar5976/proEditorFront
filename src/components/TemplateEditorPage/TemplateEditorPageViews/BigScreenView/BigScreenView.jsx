import React from "react";
import TemplateEditorHeader from "../../TemplateEditorHeader/TemplateEditorHeader";
import TemplateEditorSidebar from "../../TemplateEditorSidebar/TemplateEditorSidebar";
import IconsComponent from "../../TemplateEditorSidebar/Icons/IconsComponent";
import BackgroundComponent from "../../TemplateEditorSidebar/Background/BackgroundComponent";
import TextComponent from "../../TemplateEditorSidebar/TextTab/TextComponent";
import TextColor from "../../TemplateEditor/TextBar/TextColor/TextColor";
import TextBackground from "../../TemplateEditor/TextBar/TextBackground/TextBackground";
import TemplateEditor from "../../TemplateEditor/TemplateEditor";

const BigScreenView = ({ objectRef }) => {
  return (
    <>
      <TemplateEditorHeader />
      <div className="flex">
        <TemplateEditorSidebar />
        <IconsComponent />
        <BackgroundComponent />
        <TextComponent />
        <TextColor />
        <TextBackground />
        <TemplateEditor objectRef={objectRef} />
      </div>
    </>
  );
};

export default BigScreenView;
