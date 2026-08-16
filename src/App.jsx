import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Old multi-page routes now redirect to their anchor on the single page */}
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/education" element={<Navigate to="/#work" replace />} />
          <Route path="/work" element={<Navigate to="/#work" replace />} />
          <Route path="/research" element={<Navigate to="/#research" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
