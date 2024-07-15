import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Life,
} from "../components";

// PAGES

const Homepage = () => {
  return (
      <div className="relative z-0 bg-primary">
          {/* <Navbar /> */}
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        </div> */}
          <Hero />
        <About />
        <Life/>
        {/* <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
  );
};

export default Homepage;
