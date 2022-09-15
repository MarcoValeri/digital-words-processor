import { Routes, Route } from "react-router-dom";

// Import components
import Home from "./pages/home/home";
import RichTextEditor from "./pages/rich-text-editor/rich-text-editor";

// Import style files
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rich-text-editor' element={<RichTextEditor />} />
      </Routes>
    </>
  );
}

export default App;
