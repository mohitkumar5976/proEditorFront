import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IndustryTemplatePage from "./pages/IndustryTemplatePage";
import TemplateEditorPage from "./pages/TemplateEditorPage";
import Practice from "./pages/Practice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/p" element={<Practice />} />
        <Route path="/logo-maker/dashboard/:id" element={<TemplateEditorPage />} />
        <Route
          path="/templates/:industryName"
          element={<IndustryTemplatePage />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
