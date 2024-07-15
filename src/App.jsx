import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

// PAGES

import Project from "./pages/Projects";
import Homepage from "./pages/Homepage";
import Research from "./pages/Research";
import Contacts from "./pages/Contact";
import Video from "./pages/Video";
import Work from "./pages/Work";
import Edu from "./pages/Education";
const App = () => {
  return (
    <BrowserRouter>
          <div className="relative z-0 bg-primary">
          
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
    <Navbar/>
      <Routes>
          {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Homepage/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/work" element={<Work/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/education" element={<Edu/>}/>
      </Routes>
    {/* </div> */}
    </div>
  
    </BrowserRouter>

  );
};

export default App;
