import Home from "./components/Home";
import Communication from "./components/Communication";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-neutral-200 h-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
