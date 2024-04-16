import BottomBar from "./BottomBar/BottomBar";
import MobileIconComponent from "./BottomBar/MobileIconComponent";
import TemplateEditorHeader from "../../TemplateEditorHeader/TemplateEditorHeader";
import TextComponent from "../../TemplateEditorSidebar/TextTab/TextComponent";
import MobileBackgroundView from "./BottomBar/MobileBackgroundView/MobileBackgroundView";
import { useSelector } from "react-redux";
import TemplateEditor from "../../TemplateEditor/TemplateEditor";
import TextColor from "../../TemplateEditor/TextBar/TextColor/TextColor";
import TextBackground from "../../TemplateEditor/TextBar/TextBackground/TextBackground";

const MobileView = ({ objectRef }) => {
  const backgrounds = useSelector((state) => state.drawer.backgrounds);
  const icons = useSelector((state) => state.drawer.icons);
  const text = useSelector((state) => state.drawer.text);
  const textColors = useSelector((state) => state.drawer.textColors);
  const textBackgroundColor = useSelector(
    (state) => state.drawer.textBackgroundColor
  );
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div className="h-1/3 bg-red-400">
          <TemplateEditorHeader />
        </div>

        <TemplateEditor objectRef={objectRef} />

        <div className="flex flex-col h-1/4">
          {icons ? <MobileIconComponent /> : null}
          {text ? <TextComponent /> : null}
          {backgrounds ? <MobileBackgroundView /> : null}
          {textColors ? <TextColor /> : null}
          {textBackgroundColor ? <TextBackground /> : null}
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default MobileView;
