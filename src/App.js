import { Routes, Route } from "react-router-dom";

// Import components
import Home from "./pages/home/home";

// Import style files
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
