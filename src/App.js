import { Routes, Route, Link } from "react-router-dom";

// Import components
import Home from "./pages/home/home";
import TextToCode from "./pages/text-to-code/text-to-code";

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-to-code" element={<TextToCode />} />
      </Routes>
    </>
  );
}

export default App;
